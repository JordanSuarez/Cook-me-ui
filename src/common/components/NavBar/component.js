import React from 'react'

import {Button, Grid} from '@material-ui/core'
import {string} from 'prop-types'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {classes as classesProps} from '../../props'
import {DESERTS, DISH, STARTERS} from 'common/constants/recipe_types'
import {getDesertsRoute, getDishRoute, getStartersRoute} from 'common/routing/routesResolver'

function NavBar({classes}) {
  const {t} = useTranslation()
  const history = useHistory()

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
        <Button key={STARTERS} variant="contained" onClick={handleStartersPageDisplay} className={classes.button}>
          {t('navBar.starters')}
        </Button>
        <Button key={DISH} variant="contained" onClick={handleDishPageDisplay}>
          {t('navBar.dish')}
        </Button>
        <Button key={DESERTS} variant="contained" onClick={handleDesertsPageDisplay}>
          {t('navBar.deserts')}
        </Button>
      </Grid>
    </div>
  )
}

NavBar.propTypes = {
  desertsColor: string.isRequired,
  dishColor: string.isRequired,
  startersColor: string.isRequired,
  ...classesProps,
}

NavBar.defaultProps = {}

export default NavBar
