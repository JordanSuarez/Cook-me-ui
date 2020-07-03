import React from 'react'

import {CardActionArea, CardActions, CardHeader, CardMedia, Grid, Card as MaterialUiCard} from '@material-ui/core'
import {func, number, string} from 'prop-types'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import DeleteIcon from '@material-ui/icons/Delete'

import IconButton from '../IconButton'

import {classes as classesProps} from '../../props'
import {getShowRecipeRoute} from '../../routing/routesResolver'

function Card({id, name, image, classes, onClick}) {
  const {t} = useTranslation()

  return (
    <MaterialUiCard key={id} className={classes.shadow}>
      <Link to={getShowRecipeRoute(id)} className={classes.link}>
        <CardActionArea>
          <CardHeader title={name} />
          <CardMedia className={classes.media} image={image} title="pie" />
        </CardActionArea>
      </Link>
      <CardActions>
        <Grid container justify="flex-end">
          <Grid item>
            <IconButton title={t('recipe.card.footer.iconButton.delete')} onClick={onClick}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </MaterialUiCard>
  )
}

Card.propTypes = {
  id: number.isRequired,
  image: string,
  name: string,
  ...classesProps,
  onClick: func.isRequired,
}

Card.defaultProps = {
  image: 'images/pie.jpg',
  name: null,
}

export default Card
