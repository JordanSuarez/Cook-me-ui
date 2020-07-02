import React from 'react'

import {any, arrayOf, objectOf} from 'prop-types'
import MUIDataTable from 'mui-datatables'

import {classes as classesProps} from 'common/props'

/**
 * @return {null}
 */
function ListTable({items, columns, classes, options}) {
  if (columns.length === 0) {
    return null
  }

  return (
    <div className={classes.root}>
      <MUIDataTable data={items} columns={columns} options={options} />
    </div>
  )
}

ListTable.propTypes = {
  columns: arrayOf(any).isRequired,
  items: arrayOf(any),
  options: objectOf(any).isRequired,
  ...classesProps,
}

ListTable.defaultProps = {
  items: [],
}

export default ListTable
