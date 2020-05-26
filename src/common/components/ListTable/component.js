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
    textLabels: {
      body: {
        noMatch: `${t('list.table.body.noMatch')}`,
        toolTip: `${t('list.table.body.toolTip')}`,
        columnHeaderTooltip: (column) => `${t('list.table.body.columnHeaderTooltip')}${column.label}`,
      },
      toolbar: {
        search: `${t('list.table.toolbar.search')}`,
        viewColumns: `${t('list.table.toolbar.viewColumns')}`,
        filterTable: `${t('list.table.toolbar.filter')}`,
      },
      filter: {
        all: `${t('list.table.toolbar.filterPopUp.all')}`,
        title: `${t('list.table.toolbar.filterPopUp.title')}`,
        reset: `${t('list.table.toolbar.filterPopUp.reset')}`,
      },
      viewColumns: {
        title: `${t('list.table.toolbar.viewColumnsPopUp.title')}`,
      },
      pagination: {
        next: `${t('list.table.toolbar.pagination.next')}`,
        previous: `${t('list.table.pagination.previous')}`,
        rowsPerPage: null,
      },
    },

    filter: false,
    filterType: 'dropdown',
    responsive: 'scrollFullHeight',
    print: false,
    download: false,
    rowsPerPage: 10,
    fixedHeader: true,
    viewColumns: true,
    search: false,
    selectableRowsHeader: false,
    pagination: false,
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
