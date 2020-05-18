import {getRecipesRoute} from 'common/routing/routesResolver'
import Recipes from '../index'

export default {
  id: 'recipesPage',
  path: getRecipesRoute(),
  component: Recipes,
  requireAuthentication: true,
}
