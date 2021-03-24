import React from 'react'

import {CardActionArea, CardActions, CardHeader, CardMedia, Grid, Card as MaterialUiCard} from '@material-ui/core'
import {func, number, string} from 'prop-types'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import {classes as classesProps} from 'common/props'
import {DELETE, EDIT} from 'common/constants/context'
import {getShowRecipeRoute} from 'common/routing/routesResolver'
import IconButton from '../IconButton'

function Card({id, name, image, classes, handleClick}) {
  const {t} = useTranslation()

  return (
    <MaterialUiCard key={id} className={classes.shadow}>
      <Link to={getShowRecipeRoute(id)} className={classes.link}>
        <CardActionArea>
          <CardHeader title={name} />
          <CardMedia className={classes.media} image={image} title={t('recipe.card.media.title')} />
        </CardActionArea>
      </Link>
      <CardActions>
        <Grid container justify="flex-end">
          <Grid item>
            <IconButton title={t('recipe.card.footer.iconButton.edit')} onClick={() => handleClick(EDIT)}>
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton title={t('recipe.card.footer.iconButton.delete')} onClick={() => handleClick(DELETE)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </MaterialUiCard>
  )
}

Card.propTypes = {
  handleClick: func.isRequired,
  id: number.isRequired,
  image: string,
  name: string,
  ...classesProps,
}

Card.defaultProps = {
  image: `${process.env.PUBLIC_URL}/images/pie.jpg`,
  name: null,
}

export default Card
