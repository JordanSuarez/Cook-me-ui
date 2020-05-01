import {any, arrayOf} from 'prop-types'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react'

const Router = ({routes}) => (
  <BrowserRouter>
    <Switch>
      {routes.map(({exact = true, path, component, id}) => (
        <Route key={id} exact={exact} path={path} component={component} />
      ))}
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
