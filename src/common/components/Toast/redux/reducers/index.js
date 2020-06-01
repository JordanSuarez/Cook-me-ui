import {createReducer} from 'common/helpers/redux'
import {TOAST_HIDE, TOAST_SHOW} from '../actions/types'

const initialState = {
  isOpen: false,
  title: '',
  content: '',
  severity: '',
}

const reducersMap = {
  [TOAST_SHOW]: (state, {payload}) => {
    return {...state, ...payload}
  },
  [TOAST_HIDE]: (state) => {
    return {...state, ...initialState}
  },
}

export default (state = initialState, action) => createReducer(state, action, reducersMap)
