import React from 'react'

import {any, arrayOf} from 'prop-types'

import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core'

import {useTranslation} from 'react-i18next'

import {classes as classesProps} from '../../props'

function ListTable({items, classes}) {
  const {t} = useTranslation('starters')

  return (
    <TableContainer component={Paper}>
      <Grid container>
        <Grid item xs={12} sm={false} md={3}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">{t('recipeListTable.name')}</TableCell>
                <TableCell align="left">{t('recipeListTable.instruction')}</TableCell>
                <TableCell align="right">{t('recipeListTable.preparationTime')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="left">{item.name}</TableCell>
                  <TableCell align="left">{item.instruction}</TableCell>
                  <TableCell align="right">{item.preparationTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TablePagination rowsPerPageOptions={[10, 50, {value: -1, label: 'All'}]} />
            </TableFooter>
          </Table>
        </Grid>
      </Grid>
    </TableContainer>
  )
}

ListTable.propTypes = {
  items: arrayOf(any),
  ...classesProps,
}

ListTable.defaultProps = {
  items: [],
}

export default ListTable
