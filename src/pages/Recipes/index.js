import {connect} from 'react-redux'

import {fetchRecipes} from './redux/actions'
import mapStateToProps from './redux/selectors'
import Recipes from './component'
import reducer from './redux/reducers'
import sagas from './redux/sagas'

export {reducer, sagas}

export default connect(mapStateToProps, {fetchRecipes})(Recipes)
