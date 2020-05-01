import {call, put} from 'redux-saga/effects'

import {getResources} from 'common/helpers/repository'
import {getUrl} from 'common/helpers/urlHandler'
import {LOGIN} from 'common/constants/resources_type'
import {LOGIN_FAILED, LOGIN_SUCCEEDED} from '../actions/types'
import {POST} from 'common/constants/methods'
import {USERS} from 'common/constants/resources'

export default function* login() {
  try {
    const data = yield call(getResources, getUrl(USERS, POST, LOGIN), POST)
    const {token} = data

    yield put({type: LOGIN_SUCCEEDED, token})
  } catch (e) {
    yield put({type: LOGIN_FAILED, error: e})
  }
}
