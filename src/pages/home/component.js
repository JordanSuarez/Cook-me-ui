import React from 'react'

import {Button} from '@material-ui/core'

import {Link} from 'react-router-dom'

import {getDesertsRoute, getDishRoute, getStartersRoute} from '../../common/routing/routesResolver'

function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Link to={getStartersRoute()}>
        <Button variant="contained" color="primary">
          Starters
        </Button>
      </Link>
      <Link to={getDishRoute()}>
        <Button variant="contained" color="primary">
          Dish
        </Button>
      </Link>
      <Link to={getDesertsRoute()}>
        <Button variant="contained" color="primary">
          Deserts
        </Button>
      </Link>
    </div>
  )
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
