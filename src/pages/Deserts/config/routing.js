import {DESERTS} from 'common/routing/routesResolver'
import Deserts from '../index'

export default {
  id: 'desertsPage',
  path: DESERTS,
  component: Deserts,
  requireAuthentication: true,
}
