import {RECIPE_NEW} from 'common/routing/routesResolver'
import CreationForm from '../index'

export default {
  id: 'creationRecipePage',
  path: RECIPE_NEW,
  component: CreationForm,
  requireAuthentication: true,
}
