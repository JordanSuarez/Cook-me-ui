import {combineReducers} from 'redux'

import {reducer as recipesReducer} from 'pages/recipes'

export default combineReducers({
  entities: combineReducers({
    recipes: recipesReducer,
  }),
})
