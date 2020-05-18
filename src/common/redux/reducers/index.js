import {combineReducers} from 'redux'

import {reducer as recipesReducer} from 'pages/Recipes'

export default combineReducers({
  entities: combineReducers({
    recipes: recipesReducer,
  }),
})
