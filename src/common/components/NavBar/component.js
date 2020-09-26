import React from 'react'

import {Button, Grid} from '@material-ui/core'
import {useHistory, useRouteMatch} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {classes as classesProps} from 'common/props'
import {DESERTS, DISH, STARTERS} from 'common/constants/resources'
import {DESERTS as desertsId, DISH as dishId, STARTERS as startersId} from 'common/constants/recipe_types'
import {getDesertsRoute, getDishRoute, getStartersRoute} from 'common/routing/routesResolver'

function NavBar({classes}) {
  const {t} = useTranslation()
  const history = useHistory()
  const match = useRouteMatch()
  const currentLocationName = match.url.replace('/', '')

  function handleDishPageDisplay() {
    return history.push(getDishRoute())
  }
  function handleDesertsPageDisplay() {
    return history.push(getDesertsRoute())
  }
  function handleStartersPageDisplay() {
    return history.push(getStartersRoute())
  }

  return (
    <div>
      <Grid container justify="center">
        <Button
          key={startersId}
          variant="contained"
          onClick={handleStartersPageDisplay}
          color="primary"
          className={currentLocationName === STARTERS ? classes.currentButton : classes.button}
        >
          {t('navBar.items.starters')}
        </Button>
        <Button
          key={dishId}
          variant="contained"
          onClick={handleDishPageDisplay}
          color="primary"
          className={currentLocationName === DISH ? classes.currentButton : classes.button}
        >
          {t('navBar.items.dish')}
        </Button>
        <Button
          key={desertsId}
          variant="contained"
          onClick={handleDesertsPageDisplay}
          color="primary"
          className={currentLocationName === DESERTS ? classes.currentButton : classes.button}
        >
          {t('navBar.items.deserts')}
        </Button>
      </Grid>
    </div>
  )
}

NavBar.propTypes = {
  ...classesProps,
}

export default NavBar
