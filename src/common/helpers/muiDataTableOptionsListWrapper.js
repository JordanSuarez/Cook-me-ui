export default (t) => {
  return {
    textLabels: {
      body: {
        noMatch: `${t('list.table.body.noResult')}`,
        toolTip: `${t('list.table.body.toolTip')}`,
        columnHeaderTooltip: (column) => `${t('list.table.body.columnHeaderTooltip')}${column.label}`,
      },
      toolbar: {
        viewColumns: `${t('list.table.toolbar.viewColumns')}`,
      },
      viewColumns: {
        title: `${t('list.table.toolbar.viewColumnsModal.title')}`,
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
}
