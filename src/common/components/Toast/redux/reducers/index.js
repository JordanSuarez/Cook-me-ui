import {createReducer} from 'common/helpers/redux'
import {TOAST_HIDE, TOAST_SHOW} from '../actions/types'

const initialState = {
  isOpen: false,
}

const reducersMap = {
  [TOAST_SHOW]: (state, {payload: {display}}) => {
    return {...state, isOpen: display}
  },
  [TOAST_HIDE]: (state) => {
    // TODO implement
    return state
  },
}

export default (state = initialState, action) => createReducer(state, action, reducersMap)
