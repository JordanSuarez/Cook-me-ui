import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

import {reducers, sagas} from 'common/redux'

export default () => {
  const reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducers, reduxCompose(applyMiddleware(sagaMiddleware)))

  sagaMiddleware.run(sagas)

  return store
}
