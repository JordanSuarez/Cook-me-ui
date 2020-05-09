import React from 'react'

import {Redirect, Route, useLocation} from 'react-router-dom'

import {any, bool, string} from 'prop-types'

import {getLoginRoute} from '../routing/routesResolver'
import {isAuthenticated} from '../helpers/authProvider'

function PrivateRoute({component, path, exact, id}) {
  const location = useLocation()

  return isAuthenticated() ? (
    <Route key={id} id={id} exact={exact} path={path} component={component} />
  ) : (
    <Redirect
      to={{
        pathname: getLoginRoute(),
        state: {from: location},
      }}
    />
  )
}

PrivateRoute.propTypes = {
  // TODO handle proper type
  // eslint-disable-next-line react/forbid-prop-types
  component: any.isRequired,
  exact: bool.isRequired,
  id: string.isRequired,
  path: string.isRequired,
}

export default PrivateRoute
