import {compose} from 'recompose'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'

import {login} from './redux/actions'
import Recipes from './component'
import reducer from './redux/reducers'
import sagas from './redux/sagas'
import styles from './styles'

export {reducer, sagas}

export default compose(connect(null, {login}), withStyles(styles))(Recipes)
