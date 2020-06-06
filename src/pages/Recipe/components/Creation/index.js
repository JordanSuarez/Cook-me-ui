import {compose, mapProps} from 'recompose'
import {withStyles} from '@material-ui/core'

import {makeRequired, makeValidate} from 'mui-rff'

import CreationForm from './component'
import schema from './config/yupSchema'

import styles from './styles'

export default compose(
  withStyles(styles),
  mapProps(({...props}) => ({...props, validateFields: makeValidate(schema), requiredFields: makeRequired(schema)})),
)(CreationForm)
