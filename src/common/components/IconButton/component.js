import React from 'react'

import {func, node, string} from 'prop-types'
import {IconButton as MuiIconButton, Tooltip} from '@material-ui/core'

// eslint-disable-next-line no-unused-vars
function IconButton({title, children, onClick, color}) {
  return (
    <Tooltip title={title}>
      <MuiIconButton onClick={onClick} color={color}>
        {children}
      </MuiIconButton>
    </Tooltip>
  )
}

IconButton.propTypes = {
  children: node.isRequired,
  color: string,
  onClick: func,
  title: string,
}

IconButton.defaultProps = {
  color: null,
  onClick: Function.prototype,
  title: null,
}

export default IconButton
