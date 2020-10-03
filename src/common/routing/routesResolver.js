import {generatePath} from 'react-router-dom'

export const STARTERS = '/starters'
export const DISH = '/dish'
export const DESERTS = '/deserts'
export const RECIPE_NEW = '/recipes/new'
export const RECIPE_SHOW = '/recipes/:id/show'

export const getLoginRoute = () => '/login'
export const getLogoutRoute = () => '/logout'
export const getRecipesRoute = () => '/recipes'
export const getStartersRoute = () => generatePath(STARTERS)
export const getDesertsRoute = () => generatePath(DESERTS)
export const getDishRoute = () => generatePath(DISH)
export const getCreationRecipeRoute = () => generatePath(RECIPE_NEW)
export const getShowRecipeRoute = (id) => generatePath(RECIPE_SHOW, {id})
