import {getDishRoute} from 'common/routing/routesResolver'
import Dish from '../index'

export default {
  id: 'dishPage',
  path: getDishRoute(),
  component: Dish,
  requireAuthentication: true,
}
