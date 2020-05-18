import React from 'react'

import {any, arrayOf} from 'prop-types'

import Grid from '@material-ui/core/Grid'

import Card from '../Card'

function ListCard({items}) {
  return (
    <div>
      {items.map(({id, name, instruction}) => (
        <Grid key={id} item xs={12} sm={6} md={3} container direction="row" justify="center" alignItems="center">
          <Card id={id} name={name} instruction={instruction} />
        </Grid>
      ))}
    </div>
  )
}

ListCard.propTypes = {
  items: arrayOf(any),
}

ListCard.defaultProps = {
  items: [],
}

export default ListCard
