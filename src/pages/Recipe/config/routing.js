import {RECIPE_SHOW} from 'common/routing/routesResolver'
import Recipe from '../index'

export default {
  id: 'recipePage',
  path: RECIPE_SHOW,
  component: Recipe,
  requireAuthentication: true,
}
