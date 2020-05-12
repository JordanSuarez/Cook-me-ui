import React from 'react'

import {Link} from 'react-router-dom'

import SubmitButton from 'common/components/submitButton/component'

import {getDesertsRoute, getDishRoute, getStartersRoute} from 'common/routing/routesResolver'

function Home() {
  const starters = 'Starters'
  const dish = 'Dish'
  const deserts = 'Deserts'

  return (
    <div>
      <h1>HOME</h1>
      <Link to={getStartersRoute()}>
        <SubmitButton>{starters}</SubmitButton>
      </Link>
      <Link to={getDishRoute()}>
        <SubmitButton>{dish}</SubmitButton>
      </Link>
      <Link to={getDesertsRoute()}>
        <SubmitButton>{deserts}</SubmitButton>
      </Link>
    </div>
  )
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
