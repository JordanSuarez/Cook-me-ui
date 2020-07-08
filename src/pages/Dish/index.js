import {connect} from 'react-redux'

import {showToast} from 'common/components/Toast/redux/actions'
import Dish from './component'

export default connect(null, {showToast})(Dish)
