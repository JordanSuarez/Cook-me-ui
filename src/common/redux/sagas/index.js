import {all} from 'redux-saga/effects'

import {sagas as recipes} from 'pages/Recipes'

export default function* () {
  yield all([...recipes])
}
