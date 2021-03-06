import React, {useState} from 'react'

import {any, arrayOf, bool, func} from 'prop-types'
import {Grid} from '@material-ui/core'
import {isEmpty} from 'lodash'
import {useTranslation} from 'react-i18next'
import ViewListCard from '@material-ui/icons/ViewModule'
import ViewListTable from '@material-ui/icons/ViewHeadline'

import {classes as classesProps} from 'common/props'
import {LIST_CARD, LIST_TABLE} from 'common/constants/resources'
import AlertDialog from '../AlertDialog'
import getOptions from 'common/helpers/muiDataTableOptionsListWrapper'
import IconButton from '../IconButton'
import ListCard from 'common/components/ListCard'
import ListTable from 'common/components/ListTable'
import Pagination from 'common/components/Pagination'
import SearchBar from 'common/components/SearchBar'

/**
 * @return {null}
 */
function ListWrapper({items, columns, classes, onDeleteAction, open, onCancelAction, onAgreeAction}) {
  const {t} = useTranslation()
  const [searchResults, setSearchResults] = useState([])
  const [displayCard, setDisplayCard] = useState(true)
  const [displayTable, setDisplayTable] = useState(false)
  const [colorTableIcon, setColorTableIcon] = useState('inherit')
  const [colorCardIcon, setColorCardIcon] = useState('primary')
  const [inputValue, setInputValue] = useState('')

  if (columns.length === 0) {
    return null
  }

  function handleClick() {
    setInputValue('')
    setSearchResults([])
  }

  function handleChange(value) {
    if (!isEmpty(value)) {
      setSearchResults(items.filter((item) => item.search_name.includes(value.toLowerCase())))
    } else {
      setSearchResults([])
    }
  }

  function handleListDisplay(list) {
    if (list === LIST_TABLE) {
      setDisplayCard(false)
      setColorTableIcon('primary')
      setColorCardIcon('inherit')

      return setDisplayTable(true)
    }
    setDisplayCard(true)
    setColorCardIcon('primary')
    setColorTableIcon('inherit')

    return setDisplayTable(false)
  }

  return (
    <div>
      <Grid container direction="row-reverse" justify="flex-start" spacing={2} className={classes.container}>
        <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
          <IconButton title={t('listWrapper.header.button.title.tableView')} onClick={() => handleListDisplay(LIST_TABLE)}>
            <ViewListTable color={colorTableIcon} fontSize="large" className={classes.iconButton} />
          </IconButton>
        </Grid>
        <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
          <IconButton title={t('listWrapper.header.button.title.cardView')} onClick={() => handleListDisplay(LIST_CARD)}>
            <ViewListCard color={colorCardIcon} fontSize="large" className={classes.iconButton} />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
          <SearchBar
            value={inputValue}
            handleChange={(e) => {
              handleChange(e.target.value)
              setInputValue(e.target.value)
            }}
            handleClick={handleClick}
          />
        </Grid>
      </Grid>
      {displayCard && (
        <div>
          {/*onDelete() correspond au onClick() du button delete sur la Card*/}
          {/*Si il y a des r??sultats de recherches, on affiche uniquement le r??sultat correspondant, sans afficher la Pagination*/}
          {searchResults.length > 0 && <ListCard items={searchResults} onDeleteAction={onDeleteAction} />}
          {/*Si il n'y a pas de r??sulats de recherches, on affiche la pagination */}
          {searchResults.length === 0 && (
            <Pagination
              items={items}
              maxPerPage={5}
              renderChild={(itemsPaginated) => <ListCard items={itemsPaginated} onDeleteAction={onDeleteAction} />}
            />
          )}
        </div>
      )}
      {displayTable && (
        <div>
          {searchResults.length > 0 && <ListTable items={searchResults} columns={columns} options={getOptions(t)} />}
          {searchResults.length === 0 && (
            <Pagination
              items={items}
              maxPerPage={10}
              renderChild={(itemsPaginated) => <ListTable items={itemsPaginated} columns={columns} options={getOptions(t)} />}
            />
          )}
        </div>
      )}
      <AlertDialog
        open={open}
        title={t('recipe.modal.delete.title')}
        content={t('recipe.modal.delete.content')}
        agreeLabelButton={t('recipe.modal.delete.button.agree')}
        disagreeLabelButton={t('recipe.modal.delete.button.disagree')}
        onCancel={onCancelAction}
        onAgree={onAgreeAction}
      />
    </div>
  )
}

ListWrapper.propTypes = {
  columns: arrayOf(any).isRequired,
  items: arrayOf(any),
  onAgreeAction: func.isRequired,
  onCancelAction: func.isRequired,
  onDeleteAction: func.isRequired,
  open: bool.isRequired,
  ...classesProps,
}

ListWrapper.defaultProps = {
  items: [],
}

export default ListWrapper
