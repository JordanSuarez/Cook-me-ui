import {combineReducers} from 'redux'

import {reducer as recipesReducer} from 'pages/Recipes'
import {reducer as toastReducer} from 'common/components/Toast'

export default combineReducers({
  entities: combineReducers({
    recipes: recipesReducer,
    toast: toastReducer,
  }),
})
