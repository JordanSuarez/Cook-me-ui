import {getHomeRoute} from 'common/routing/routesResolver'
import Home from '../index'

export default {
  id: 'homePage',
  path: getHomeRoute(),
  component: Home,
  requireAuthentication: true,
}
