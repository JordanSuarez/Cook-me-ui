import React from 'react'

import {any, arrayOf, func} from 'prop-types'

import {Grid} from '@material-ui/core'

import {classes as classesProps} from '../../props'
import Card from '../Card'

function ListCard({items, classes, onClick}) {
  return (
    <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3} className={classes.root}>
      {items.map(({id, name}) => (
        <Grid key={id} item xs={12} sm={6} md={3}>
          <Card key={`${id}-${name}`} id={id} name={name} onClick={onClick} />
        </Grid>
      ))}
    </Grid>
  )
}

ListCard.propTypes = {
  items: arrayOf(any),
  ...classesProps,
  onClick: func.isRequired,
}

ListCard.defaultProps = {
  items: [],
}

export default ListCard
