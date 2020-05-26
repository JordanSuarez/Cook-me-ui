import React, {useState} from 'react'

import {any, arrayOf} from 'prop-types'

import {isEmpty} from 'lodash'
import Button from '@material-ui/core/Button'

import Filter from 'common/components/Filter'
import ListCard from 'common/components/ListCard'
import ListTable from 'common/components/ListTable'
import Pagination from 'common/components/Pagination'

const LIST_TABLE = 'list_table'
const LIST_CARD = 'list_card'

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
      {displayCard && <Filter handleChange={(e) => handleChange(e.target.value)} />}
      {displayCard && searchResults.length > 0 && <ListCard items={searchResults} />}
      {displayCard && searchResults.length === 0 && items.length > 0 && (
        <Pagination items={items} renderChild={(itemsPaginated) => <ListCard items={itemsPaginated} />} />
      )}
      {displayTable && <ListTable items={items} columns={columns} />}
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
