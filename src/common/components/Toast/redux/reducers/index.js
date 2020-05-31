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
    // Ici j'essaye de reset le state du toast success et du toast error, car ils ne s'affichent qu'une seule fois,
    // sauf si je refresh la page.
    return {...state, isHide: hide, isOpenSuccess: false, isOpenError: false}
  },
}

export default (state = initialState, action) => createReducer(state, action, reducersMap)
