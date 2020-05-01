import {createAction} from 'common/helpers/redux'

import {LOGIN, LOGIN_FAILED, LOGIN_SUCCEEDED} from './types'

export const login = createAction(LOGIN)
export const loginSuccess = createAction(LOGIN_SUCCEEDED)
export const loginFailure = createAction(LOGIN_FAILED)
