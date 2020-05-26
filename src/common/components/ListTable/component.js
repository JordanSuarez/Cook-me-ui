import React from 'react'

import {any, arrayOf} from 'prop-types'
import {useTranslation} from 'react-i18next'
import MUIDataTable from 'mui-datatables'

import {classes as classesProps} from '../../props'

/**
 * @return {null}
 */
function ListTable({items, columns}) {
  const {t} = useTranslation('listTable')

  if (columns.length === 0) {
    return null
  }

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'scrollFullHeight',
    print: false,
    download: false,
    rowsPerPage: 10,
    fixedHeader: true,
    viewColumns: true,
    selectableRowsHeader: false,
    selectableRows: 'none',
    searchPlaceholder: `${t('searchBar.form.label.field')}`,
  }

  return (
    <div>
      <MUIDataTable data={items} columns={columns} options={options} />
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
