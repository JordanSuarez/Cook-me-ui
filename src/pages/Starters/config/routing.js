import {STARTERS} from 'common/routing/routesResolver'
import Starters from '../index'

export default {
  id: 'startersPage',
  path: STARTERS,
  component: Starters,
  requireAuthentication: true,
}
