import {connect} from 'react-redux'

import {login} from './redux/actions'
import Recipes from './component'
import reducer from './redux/reducers'
import sagas from './redux/sagas'

export {reducer, sagas}

export default connect(null, {login})(Recipes)
