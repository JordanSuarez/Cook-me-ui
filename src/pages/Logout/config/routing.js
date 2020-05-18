import {getLogoutRoute} from 'common/routing/routesResolver'
import Logout from '../index'

export default {
  id: 'logoutPage',
  path: getLogoutRoute(),
  component: Logout,
  requireAuthentication: true,
}
