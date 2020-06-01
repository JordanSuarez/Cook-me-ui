import {createAction} from 'common/helpers/redux'

import {TOAST_HIDE, TOAST_SHOW} from './types'

export const showToast = createAction(TOAST_SHOW, 'isOpen', 'severity', 'title', 'content')
export const hideToast = createAction(TOAST_HIDE)
