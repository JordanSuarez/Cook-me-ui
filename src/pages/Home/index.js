import {withStyles} from '@material-ui/core'

import {compose, mapProps} from 'recompose'

import {callApi} from '../../common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from '../../common/helpers/urlHandler'
import {RECIPES} from '../../common/constants/resources'
import {TYPES} from '../../common/constants/resources_type'
import Home from './component'
import renderWhileLoading from '../../common/helpers/renderWhileLoading'
import styles from './styles'

export default compose(
  mapProps((...props) => ({data: callApi(getEndpoint(RECIPES, GET, TYPES), GET), ...props})),
  renderWhileLoading(),
  withStyles(styles),
)(Home)
