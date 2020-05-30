import {arrayOf, func} from 'prop-types'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {Provider} from 'react-redux'
import React, {Suspense} from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'

import {routes} from '../routing/routes'
import initStore from '../redux/store'
import Router from '../routing/router'
import theme from '../theme'
import Toast from '../components/Toast'

const Core = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Suspense fallback="loading">
        <CssBaseline />
        <Provider store={initStore()}>
          <Toast />
          <Router routes={routes} />
        </Provider>
      </Suspense>
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
