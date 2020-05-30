import {withStyles} from '@material-ui/core'

import {compose} from 'recompose'
import {connect} from 'react-redux'

import {showToast} from '../../common/components/Toast/redux/actions'
import Home from './component'
import styles from './styles'

export default compose(connect(null, {showToast}), withStyles(styles))(Home)
