import {connect} from 'react-redux'

import {showToast} from 'common/components/Toast/redux/actions'
import Starters from './component'

export default connect(null, {showToast})(Starters)
