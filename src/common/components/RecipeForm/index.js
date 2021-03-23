import {withStyles} from '@material-ui/core'

import {compose, mapProps} from 'recompose'
import {makeValidate} from 'mui-rff'

import RecipeForm from './component'
import schema from './config/yupSchema'
import styles from './styles'

export default compose(
  withStyles(styles),
  mapProps(({...props}) => ({...props, validateFields: (errorMessages) => makeValidate(schema(errorMessages))})),
)(RecipeForm)
