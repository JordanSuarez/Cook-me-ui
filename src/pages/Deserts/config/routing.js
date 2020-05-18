import {getDesertsRoute} from 'common/routing/routesResolver'
import Deserts from '../index'

export default {
  id: 'desertsPage',
  path: getDesertsRoute(),
  component: Deserts,
  requireAuthentication: true,
}
