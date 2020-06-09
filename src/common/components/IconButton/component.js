import React from 'react'

import {func, node, string} from 'prop-types'
import {IconButton as MuiIconButton, Tooltip} from '@material-ui/core'

import {classes as classesProps} from 'common/props'

function IconButton({title, children, onClick, classes}) {
  return (
    <Tooltip title={title}>
      <MuiIconButton onClick={onClick} className={classes}>
        {children}
      </MuiIconButton>
    </Tooltip>
  )
}

IconButton.propTypes = {
  children: node.isRequired,
  onClick: func,
  title: string,
  ...classesProps,
}

IconButton.defaultProps = {
  onClick: Function.prototype,
  title: null,
}

export default IconButton
