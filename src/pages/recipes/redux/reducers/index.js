import {merge} from 'lodash'

import {createReducer} from 'common/helpers/redux'
import {RECIPES_FETCH, RECIPES_FETCH_FAILED, RECIPES_FETCH_SUCCEEDED} from '../actions/types'

const initialState = []
const reducersMap = {
  [RECIPES_FETCH]: (state) => state,
  [RECIPES_FETCH_SUCCEEDED]: (state, {data}) => data,
  [RECIPES_FETCH_FAILED]: (state, {error}) => merge(state, error),
}

export default (state = initialState, action) => createReducer(state, action, reducersMap)
