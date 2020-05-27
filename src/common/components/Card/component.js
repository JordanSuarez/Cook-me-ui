import React from 'react'

import {number, string} from 'prop-types'

import {CardContent, CardHeader, CardMedia, Card as MaterialUiCard, Typography} from '@material-ui/core'

import {classes as classesProps} from '../../props'

function Card({id, name, instruction, image, classes}) {
  return (
    <MaterialUiCard key={id} className={classes.shadow}>
      <CardHeader title={name} />
      <CardMedia className={classes.media} image={image} title="pie" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {instruction}
        </Typography>
      </CardContent>
    </MaterialUiCard>
  )
}

Card.propTypes = {
  id: number.isRequired,
  image: string,
  instruction: string,
  name: string,
  ...classesProps,
}

Card.defaultProps = {
  image: 'images/pie.jpg',
  instruction: null,
  name: null,
}

export default Card
