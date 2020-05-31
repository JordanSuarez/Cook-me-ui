import {get} from 'lodash'

import {entitySelector} from 'common/redux/selectors'

const toastSelector = (state) => entitySelector(state, 'toast')

export default (state) => ({
  displaySuccess: get(toastSelector(state), 'isOpenSuccess'),
  displayError: get(toastSelector(state), 'isOpenError'),
  hide: get(toastSelector(state), 'isHide'),
})
