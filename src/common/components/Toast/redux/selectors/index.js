import {get} from 'lodash'

import {entitySelector} from 'common/redux/selectors'

const toastSelector = (state) => entitySelector(state, 'toast')

export default (state) => ({
  display: get(toastSelector(state), 'isOpen'),
})
