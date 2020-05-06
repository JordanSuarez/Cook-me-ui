import {arrayOf, func} from 'prop-types'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {Provider} from 'react-redux'
import React from 'react'

import {routes} from '../routing/routes'
import initStore from '../redux/store'
import Router from '../routing/router'
import theme from '../theme'

const Core = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={initStore()}>
      <Router routes={routes} />
    </Provider>
  </MuiThemeProvider>
)

Core.propTypes = {
  middlewares: arrayOf(func),
  sagas: func,
}

Core.defaultProps = {
  middlewares: [],
  *sagas() {
    yield
  },
}

export default Core
