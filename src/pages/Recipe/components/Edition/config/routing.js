import {RECIPE_EDIT} from 'common/routing/routesResolver'
import EditForm from '../index'

export default {
  id: 'editionRecipePage',
  path: RECIPE_EDIT,
  component: EditForm,
  requireAuthentication: true,
}
