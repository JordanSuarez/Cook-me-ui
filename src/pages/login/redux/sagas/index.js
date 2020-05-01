import {takeLatest} from 'redux-saga/effects'

import {LOGIN} from '../actions/types'

import login from './login'

export default [takeLatest([LOGIN], login)]
