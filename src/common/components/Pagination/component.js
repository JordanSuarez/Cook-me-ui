import {any, arrayOf, func} from 'prop-types'
import MuiPagination from '@material-ui/lab/Pagination'
import React, {useEffect, useState} from 'react'

import {classes as classesProps} from '../../props'

function Pagination({classes, items, renderChild}) {
  const maxPerPage = 5
  const [itemsPaginated, setItemsPaginated] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(maxPerPage)

  function initCount() {
    const modulo = items.length % maxPerPage

    if (modulo === 0) {
      return items.length / maxPerPage
    }

    return Math.floor(items.length / maxPerPage) + 1
  }

  useEffect(() => {
    setCount(initCount)
    setItemsPaginated(items.slice(0, maxPerPage))
    // eslint-disable-next-line
  }, [])

  const handleChange = (event, value) => {
    setCurrentPage(value)
    setItemsPaginated(items.slice(maxPerPage * (value - 1), maxPerPage * value))
  }

  return (
    <div className={classes.root}>
      {renderChild(itemsPaginated)}
      <MuiPagination count={count} onChange={handleChange} page={currentPage} />
    </div>
  )
}

Pagination.propTypes = {
  ...classesProps,
  items: arrayOf(any),
  renderChild: func,
}

Pagination.defaultProps = {
  items: [],
  renderChild: Function.prototype,
}

export default Pagination
