import {createAction} from 'common/helpers/redux'

import {RECIPES_FETCH, RECIPES_FETCH_FAILED, RECIPES_FETCH_SUCCEEDED} from './types'

export const fetchRecipes = createAction(RECIPES_FETCH)
export const fetchRecipesSuccess = createAction(RECIPES_FETCH_SUCCEEDED)
export const fetchRecipesFailure = createAction(RECIPES_FETCH_FAILED)
