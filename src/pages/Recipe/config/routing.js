import {RECIPE_ID} from 'common/routing/routesResolver'
import Recipe from '../index'

export default {
  id: 'recipePage',
  path: RECIPE_ID,
  component: Recipe,
  requireAuthentication: true,
}
