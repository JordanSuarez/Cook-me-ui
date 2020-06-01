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
    // Je reset le state des toasts success et error
    return {...state, isHide: hide, isOpenSuccess: false, isOpenError: false}
  },
}

export default (state = initialState, action) => createReducer(state, action, reducersMap)
