import {getNewRecipesRoute} from 'common/routing/routesResolver'
import CreateForm from '../index'

export default {
  id: 'newRecipesPage',
  path: getNewRecipesRoute(),
  component: CreateForm,
  requireAuthentication: true,
}
