import {compose} from 'recompose'
import {connect} from 'react-redux'

import {showToast} from 'common/components/Toast/redux/actions'
import Dish from './component'

export default compose(connect(null, {showToast}))(Dish)
