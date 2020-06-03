import {DISH} from 'common/routing/routesResolver'
import Dish from '../index'

export default {
  id: 'dishPage',
  path: DISH,
  component: Dish,
  requireAuthentication: true,
}
