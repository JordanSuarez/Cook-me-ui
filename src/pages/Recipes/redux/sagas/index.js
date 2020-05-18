import {takeLatest} from 'redux-saga/effects'

import {RECIPES_FETCH} from '../actions/types'

import fetchRecipes from './fetchRecipes'

export default [takeLatest([RECIPES_FETCH], fetchRecipes)]
