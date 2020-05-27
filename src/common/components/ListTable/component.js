import React from 'react'

import {any, arrayOf} from 'prop-types'
import {useTranslation} from 'react-i18next'
import MUIDataTable from 'mui-datatables'

import {classes as classesProps} from 'common/props'
import getOptions from 'common/helpers/muiDataTableOptions'

/**
 * @return {null}
 */
function ListTable({items, columns, classes}) {
  const {t} = useTranslation('listTable')

  if (columns.length === 0) {
    return null
  }

  return (
    <div className={classes.root}>
      <MUIDataTable data={items} columns={columns} options={getOptions(t)} />
    </div>
  )
}

ListTable.propTypes = {
  columns: arrayOf(any).isRequired,
  items: arrayOf(any),
  ...classesProps,
}

ListTable.defaultProps = {
  items: [],
}

export default ListTable
