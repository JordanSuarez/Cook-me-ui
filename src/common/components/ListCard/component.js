import React from 'react'

import {any, arrayOf, func} from 'prop-types'

import {Grid} from '@material-ui/core'

import {classes as classesProps} from 'common/props'
import Card from '../Card'

function ListCard({items, classes, onDeleteAction, onEditAction}) {
  return (
    <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3} className={classes.root}>
      {items.map(({id, name}) => (
        <Grid key={id} item xs={12} sm={6} md={3}>
          <Card key={`${id}-${name}`} id={id} name={name} onDeleteAction={() => onDeleteAction(id)} onEditAction={() => onEditAction(id)} />
        </Grid>
      ))}
    </Grid>
  )
}

ListCard.propTypes = {
  items: arrayOf(any),
  ...classesProps,
  onDeleteAction: func.isRequired,
  onEditAction: func.isRequired,
}

ListCard.defaultProps = {
  items: [],
}

export default ListCard
