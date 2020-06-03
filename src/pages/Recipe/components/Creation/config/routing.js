import {getCreationRecipeRoute} from 'common/routing/routesResolver'
import CreateForm from '../index'

export default {
  id: 'creationRecipePage',
  path: getCreationRecipeRoute(),
  component: CreateForm,
  requireAuthentication: true,
}
