import {createReducer} from 'common/helpers/redux'
import {TOAST_HIDE, TOAST_SHOW_ERROR, TOAST_SHOW_SUCCESS} from '../actions/types'

const initialState = {
  isOpenSuccess: false,
  isOpenError: false,
  isHide: false,
}

const reducersMap = {
  [TOAST_SHOW_SUCCESS]: (state, {payload: {displaySuccess}}) => {
    return {...state, isOpenSuccess: displaySuccess}
  },
  [TOAST_SHOW_ERROR]: (state, {payload: {displayError}}) => {
    return {...state, isOpenError: displayError}
  },
  [TOAST_HIDE]: (state, {payload: {hide}}) => {
    // TODO implement
    return {...state, isHide: hide}
  },
}

export default (state = initialState, action) => createReducer(state, action, reducersMap)
