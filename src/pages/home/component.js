import React from 'react'

import {Button} from '@material-ui/core'

import {Link} from 'react-router-dom'

import {classes as classesProps} from 'common/props'
import {getStartersRoute} from '../../common/routing/routesResolver'

function Home() {
  //TODO  if starters button submit, getStartersRoute,
  //      else if dish button submit, getDishRoute,
  //      else if deserts button submit, getDesertsRoute,
  // function onSubmit(values) {
  //   handleLogin(values).then((logged) => (logged ? history.push(getStartersRoute()) : null))
  // }

  return (
    <div>
      <h1>HOME</h1>
      <Link to={getStartersRoute()}>
        <Button type="submit" variant="contained" color="primary">
          Starters
        </Button>
      </Link>

      <Button type="submit" variant="contained" color="primary">
        Dish
      </Button>
      <Button type="submit" variant="contained" color="primary">
        Deserts
      </Button>
    </div>
  )
}

Home.propTypes = {
  ...classesProps,
}

Home.defaultProps = {}

export default Home
