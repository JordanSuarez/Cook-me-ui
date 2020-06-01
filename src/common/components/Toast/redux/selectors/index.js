import {get} from 'lodash'

import {entitySelector} from 'common/redux/selectors'

const toastSelector = (state) => entitySelector(state, 'toast')

export default (state) => ({
  isOpen: get(toastSelector(state), 'isOpen'),
  severity: get(toastSelector(state), 'severity'),
  title: get(toastSelector(state), 'title'),
  content: get(toastSelector(state), 'content'),
})
