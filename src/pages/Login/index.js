import {withStyles} from '@material-ui/core'

import {compose} from 'recompose'
import {connect} from 'react-redux'

import {hideToast, showToastError, showToastSuccess} from 'common/components/Toast/redux/actions'
import Login from './component'
import styles from './styles'

export default compose(connect(null, {hideToast, showToastError, showToastSuccess}), withStyles(styles))(Login)
