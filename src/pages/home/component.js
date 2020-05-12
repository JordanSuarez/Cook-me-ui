import React from 'react'

import {Link} from 'react-router-dom'

import Button from 'common/components/ctaButton'

import {getDesertsRoute, getDishRoute, getStartersRoute} from 'common/routing/routesResolver'

function Home() {
  const starters = 'Starters'
  const dish = 'Dish'
  const deserts = 'Deserts'

  return (
    <div>
      <h1>HOME</h1>
      <Link to={getStartersRoute()}>
        <Button label={starters} />
      </Link>
      <Link to={getDishRoute()}>
        <Button label={dish} />
      </Link>
      <Link to={getDesertsRoute()}>
        <Button label={deserts} />
      </Link>
    </div>
  )
}

export default Home
