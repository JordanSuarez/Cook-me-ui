import React, {useState} from 'react'

import {any, arrayOf} from 'prop-types'

import {isEmpty} from 'lodash'
import Button from '@material-ui/core/Button'

import {LIST_CARD, LIST_TABLE} from '../../constants/resources'
import ListCard from 'common/components/ListCard'
import ListTable from 'common/components/ListTable'
import Pagination from 'common/components/Pagination'
import SearchBar from 'common/components/SearchBar'

/**
 * @return {null}
 */
function ListWrapper({items, columns}) {
  const [searchResults, setSearchResults] = useState([])
  const [displayCard, setDisplayCard] = useState(true)
  const [displayTable, setDisplayTable] = useState(false)

  if (columns.length === 0) {
    return null
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

      return setDisplayTable(true)
    }
    setDisplayCard(true)

    return setDisplayTable(false)
  }

  return (
    <div>
      <Button onClick={() => handleListDisplay(LIST_TABLE)} text="test">
        Table
      </Button>
      <Button onClick={() => handleListDisplay(LIST_CARD)} text="test2">
        Card
      </Button>
      <SearchBar handleChange={(e) => handleChange(e.target.value)} />
      {displayCard && (
        <div>
          {/*Si il y a des résultats de recherches, on affiche uniquement le résultat correspondant, sans afficher la Pagination*/}
          {searchResults.length > 0 && <ListCard items={searchResults} />}
          {/*Si il n'y a pas de résulats de recherches, on affiche la pagination */}
          {searchResults.length === 0 && (
            <Pagination items={items} maxPerPage={5} renderChild={(itemsPaginated) => <ListCard items={itemsPaginated} />} />
          )}
        </div>
      )}
      {displayTable && (
        <div>
          {searchResults.length > 0 && <ListTable items={searchResults} columns={columns} />}
          {searchResults.length === 0 && (
            <Pagination
              items={items}
              maxPerPage={10}
              renderChild={(itemsPaginated) => <ListTable items={itemsPaginated} columns={columns} />}
            />
          )}
        </div>
      )}
    </div>
  )
}

ListWrapper.propTypes = {
  columns: arrayOf(any).isRequired,
  items: arrayOf(any),
}

ListWrapper.defaultProps = {
  items: [],
}

export default ListWrapper
