import React from 'react'

import {Link} from 'react-router-dom'

import Submit from 'common/components/button'

import {getDesertsRoute, getDishRoute, getStartersRoute} from 'common/routing/routesResolver'

function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Link to={getStartersRoute()}>
        <Submit>Starters</Submit>
      </Link>
      <Link to={getDishRoute()}>
        <Submit>Dish</Submit>
      </Link>
      <Link to={getDesertsRoute()}>
        <Submit>Deserts</Submit>
      </Link>
    </div>
  )
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
