import React from 'react'

import {any, arrayOf} from 'prop-types'
import {useTranslation} from 'react-i18next'
import MUIDataTable from 'mui-datatables'

import getOptions from 'common/helpers/muiDataTableOptions'

import {classes as classesProps} from '../../props'

/**
 * @return {null}
 */
function ListTable({items, columns}) {
  const {t} = useTranslation('listTable')

  if (columns.length === 0) {
    return null
  }

  return (
    <div>
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
