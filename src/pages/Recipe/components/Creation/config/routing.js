import {RECIPE_NEW} from 'common/routing/routesResolver'
import CreateForm from '../index'

export default {
  id: 'creationRecipePage',
  path: RECIPE_NEW,
  component: CreateForm,
  requireAuthentication: true,
}
