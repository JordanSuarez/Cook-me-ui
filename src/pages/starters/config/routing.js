import {getStartersRoute} from 'common/routing/routesResolver'
import Starters from '../index'

export default {
  id: 'startersPage',
  path: getStartersRoute(),
  component: Starters,
  requireAuthentication: true,
}
