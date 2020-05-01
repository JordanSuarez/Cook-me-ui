import {arrayOf, func} from 'prop-types'
import {Provider} from 'react-redux'

import React from 'react'

import {routes} from '../routing/routes'
import initStore from '../redux/store'
import Router from '../routing/router'

const Core = () => (
  <Provider store={initStore()}>
    <Router routes={routes} />
  </Provider>
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
