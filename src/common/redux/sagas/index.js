import {all} from 'redux-saga/effects'

import {sagas as recipes} from 'pages/recipes'

export default function* () {
  yield all([...recipes])
}
