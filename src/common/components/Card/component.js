import React from 'react'

import {CardActionArea, CardContent, CardHeader, CardMedia, Card as MaterialUiCard, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {number, string} from 'prop-types'

import {classes as classesProps} from '../../props'
import {getShowRecipeRoute} from '../../routing/routesResolver'

function Card({id, name, instruction, image, classes}) {
  return (
    <MaterialUiCard key={id} className={classes.shadow}>
      <Link to={getShowRecipeRoute(id)} className={classes.link}>
        <CardActionArea>
          <CardHeader title={name} />
          <CardMedia className={classes.media} image={image} title="pie" />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {instruction}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
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
