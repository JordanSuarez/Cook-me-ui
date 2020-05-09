import {any, arrayOf} from 'prop-types'
import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import PrivateRoute from '../authentication/PrivateRoute'

const Router = ({routes}) => (
  <BrowserRouter>
    <Switch>
      {routes.map(({exact = true, path, component, id, requireAuthentication}) => {
        return requireAuthentication ? (
          <PrivateRoute key={id} path={path} id={id} exact={exact} component={component} />
        ) : (
          <Route key={id} exact={exact} path={path} component={component} />
        )
      })}
    </Switch>
  </BrowserRouter>
)

Router.propTypes = {
  routes: arrayOf(any),
}

Router.defaultProps = {
  routes: [],
}

export default Router
