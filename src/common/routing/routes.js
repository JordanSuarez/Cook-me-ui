import desertsRouting from 'pages/deserts/config/routing'
import dishRouting from 'pages/dish/config/routing'
import homeRouting from 'pages/home/config/routing'
import loginRouting from 'pages/login/config/routing'
import logoutRouting from 'pages/logout/config/routing'
import recipesRouting from 'pages/recipes/config/routing'
import startersRouting from 'pages/starters/config/routing'

/**
 *
 * @type {*[]}
 */
// eslint-disable-next-line import/prefer-default-export
export const routes = [recipesRouting, loginRouting, homeRouting, logoutRouting, startersRouting, dishRouting, desertsRouting]
