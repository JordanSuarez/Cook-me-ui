import {generatePath} from 'react-router-dom'

export const STARTERS = '/starters/:id'
export const DISH = '/dish/:id'
export const DESERTS = '/deserts/:id'
export const RECIPE_NEW = '/recipes/new'
export const RECIPE_ID = '/recipes/:id'

export const getHomeRoute = () => '/home'
export const getLoginRoute = () => '/login'
export const getLogoutRoute = () => '/logout'
export const getRecipesRoute = () => '/recipes'
export const getStartersRoute = (id) => generatePath(STARTERS, {id})
export const getDesertsRoute = (id) => generatePath(DESERTS, {id})
export const getDishRoute = (id) => generatePath(DISH, {id})
export const getCreationRecipeRoute = () => generatePath(RECIPE_NEW)
export const getRecipeRoute = (id) => generatePath(RECIPE_ID, {id})
