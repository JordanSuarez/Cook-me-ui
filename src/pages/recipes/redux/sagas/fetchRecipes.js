import {call, put} from 'redux-saga/effects'

import {ALL} from 'common/constants/resources_type'
import {GET} from 'common/constants/methods'
import {getResources} from 'common/helpers/repository'
import {getUrl} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import {RECIPES_FETCH_FAILED, RECIPES_FETCH_SUCCEEDED} from 'pages/recipes/redux/actions/types'

export default function* fetchRecipes() {
  try {
    const recipes = yield call(getResources, getUrl(RECIPES, GET, ALL), GET)
    const {data} = recipes

    yield put({type: RECIPES_FETCH_SUCCEEDED, data})
  } catch (e) {
    yield put({type: RECIPES_FETCH_FAILED, error: e})
  }
}
