import React from 'react'

import {any, arrayOf} from 'prop-types'
import {Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core'
import {useTranslation} from 'react-i18next'

import {classes as classesProps} from '../../props'

function ListTable({items, classes}) {
  const {t} = useTranslation('starters')

  return (
    <TableContainer component={Paper}>
      <Grid item>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">{t('recipeListTable.name')}</TableCell>
              <TableCell align="left">{t('recipeListTable.preparationTime')}</TableCell>
              <TableCell align="left">{t('recipeListTable.instruction')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.preparationTime}</TableCell>
                <TableCell align="left">{item.instruction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
