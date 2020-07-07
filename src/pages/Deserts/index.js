import {compose} from 'recompose'
import {connect} from 'react-redux'

import {showToast} from 'common/components/Toast/redux/actions'
import Deserts from './component'

export default compose(connect(null, {showToast}))(Deserts)
