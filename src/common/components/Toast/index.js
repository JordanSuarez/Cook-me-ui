import {compose} from 'recompose'
import {withStyles} from '@material-ui/core'

import {connect} from 'react-redux'

import styles from './styles'
import Toast from './component'

import {hideToast} from './redux/actions'
import mapStateToProps from './redux/selectors'
import reducer from './redux/reducers'

export {reducer}
export default compose(connect(mapStateToProps, {hideToast}), withStyles(styles))(Toast)
