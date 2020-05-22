// eslint-disable-next-line no-unused-vars
import React from 'react'

import {any, arrayOf} from 'prop-types'

function SwitchComponent() {}

SwitchComponent.propTypes = {
  items: arrayOf(any),
}

SwitchComponent.defaultProps = {
  items: [],
}

export default SwitchComponent
