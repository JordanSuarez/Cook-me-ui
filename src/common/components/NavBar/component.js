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

  const types = [
    {id: startersId, name: STARTERS, method: handleStartersPageDisplay, keyTrad: 'navBar.items.starters'},
    {id: dishId, name: DISH, method: handleDishPageDisplay, keyTrad: 'navBar.items.dish'},
    {id: desertsId, name: DESERTS, method: handleDesertsPageDisplay, keyTrad: 'navBar.items.deserts'},
  ]

  return (
    <div>
      <Grid container justify="center">
        {types.map(({id, name, method, keyTrad}) => {
          return (
            <Button
              key={id}
              variant="contained"
              onClick={method}
              color="primary"
              className={currentLocationName === name ? classes.currentButton : classes.button}
            >
              {t(keyTrad)}
            </Button>
          )
        })}
      </Grid>
    </div>
  )
}

NavBar.propTypes = {
  ...classesProps,
}

export default NavBar
