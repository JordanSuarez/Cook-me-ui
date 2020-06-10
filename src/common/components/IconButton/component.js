import React from 'react'

import {func, node, string} from 'prop-types'
import {IconButton as MuiIconButton, Tooltip} from '@material-ui/core'

function IconButton({title, children, onClick}) {
  return (
    <Tooltip title={title}>
      <MuiIconButton onClick={onClick}>{children}</MuiIconButton>
    </Tooltip>
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
