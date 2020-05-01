import {merge} from 'lodash'

import {createReducer} from 'common/helpers/redux'
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCEEDED} from '../actions/types'

const initialState = []
const reducersMap = {
  [LOGIN]: (state) => state,
  // eslint-disable-next-line no-unused-vars
  [LOGIN_SUCCEEDED]: (state, {token}) => {
    // TODO implement login
  },
  [LOGIN_FAILED]: (state, {error}) => merge(state, error),
}

export default (state = initialState, action) => createReducer(state, action, reducersMap)
