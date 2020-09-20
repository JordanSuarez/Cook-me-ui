import creationRecipeRouting from 'pages/Recipe/components/Creation/config/routing'
import desertsRouting from 'pages/Deserts/config/routing'
import dishRouting from 'pages/Dish/config/routing'
import loginRouting from 'pages/Login/config/routing'
import logoutRouting from 'pages/Logout/config/routing'
//import recipesRouting from 'pages/Recipes/config/routing'
import recipeRouting from 'pages/Recipe/config/routing'
import startersRouting from 'pages/Starters/config/routing'

/**
 *
 * @type {*[]}
 */
// eslint-disable-next-line import/prefer-default-export
export const routes = [
  //recipesRouting,
  recipeRouting,
  loginRouting,
  // homeRouting,
  logoutRouting,
  creationRecipeRouting,
  startersRouting,
  dishRouting,
  desertsRouting,
]
