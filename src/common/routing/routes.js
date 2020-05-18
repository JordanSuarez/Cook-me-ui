import desertsRouting from 'pages/Deserts/config/routing'
import dishRouting from 'pages/Dish/config/routing'
import homeRouting from 'pages/Home/config/routing'
import loginRouting from 'pages/Login/config/routing'
import logoutRouting from 'pages/Logout/config/routing'
import recipesRouting from 'pages/Recipes/config/routing'
import startersRouting from 'pages/Starters/config/routing'

/**
 *
 * @type {*[]}
 */
// eslint-disable-next-line import/prefer-default-export
export const routes = [recipesRouting, loginRouting, homeRouting, logoutRouting, startersRouting, dishRouting, desertsRouting]
