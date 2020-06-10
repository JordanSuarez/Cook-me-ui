import React from 'react'

import {func, node, string} from 'prop-types'
// import {IconButton as MuiIconButton, Tooltip} from '@material-ui/core'
import Button from '@material-ui/core/Button'

// eslint-disable-next-line no-unused-vars
function IconButton({title, children, onClick}) {
  return (
    // <Tooltip title={title}>
    <Button onClick={onClick}>{children}</Button>
    // </Tooltip>
  )
}

IconButton.propTypes = {
  children: node.isRequired,
  onClick: func,
  title: string,
}

IconButton.defaultProps = {
  onClick: Function.prototype,
  title: null,
}

export default IconButton
