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
  const types = [
    {id: startersId, name: STARTERS, route: getStartersRoute(), keyTrad: 'navBar.items.starters'},
    {id: dishId, name: DISH, route: getDishRoute(), keyTrad: 'navBar.items.dish'},
    {id: desertsId, name: DESERTS, route: getDesertsRoute(), keyTrad: 'navBar.items.deserts'},
  ]

  function handlePageDisplay(route) {
    return history.push(route)
  }

  return (
    <div>
      <Grid container justify="center">
        {types.map(({id, name, route, keyTrad}) => {
          return (
            <Button
              key={id}
              variant="contained"
              onClick={() => handlePageDisplay(route)}
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
