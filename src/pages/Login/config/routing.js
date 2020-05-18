import {getLoginRoute} from 'common/routing/routesResolver'
import Login from '../index'

export default {
  id: 'loginPage',
  path: getLoginRoute(),
  component: Login,
  requireAuthentication: false,
}
