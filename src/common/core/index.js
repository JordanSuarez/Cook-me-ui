import {arrayOf, func} from 'prop-types'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {Provider} from 'react-redux'
import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'

import {routes} from '../routing/routes'
import initStore from '../redux/store'
import Router from '../routing/router'
import theme from '../theme'

const Core = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={initStore()}>
        <Router routes={routes} />
      </Provider>
    </MuiThemeProvider>
  )
}

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
