import {entitySelector} from 'common/redux/selectors'

const recipesSelector = (state) => entitySelector(state, 'recipes')

export default (state) => ({
  recipes: recipesSelector(state),
})
