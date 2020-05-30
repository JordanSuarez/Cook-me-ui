import {createAction} from 'common/helpers/redux'

import {TOAST_HIDE, TOAST_SHOW_ERROR, TOAST_SHOW_SUCCESS} from './types'

export const showToastSuccess = createAction(TOAST_SHOW_SUCCESS, 'displaySuccess')
export const showToastError = createAction(TOAST_SHOW_ERROR, 'displayError')
export const hideToast = createAction(TOAST_HIDE, 'hide')
