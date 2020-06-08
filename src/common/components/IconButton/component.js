import React from 'react'

import {func, node, string} from 'prop-types'
import {IconButton as MuiIconButton, Tooltip} from '@material-ui/core'

import {classes as classesProps} from 'common/props'

function IconButton({title, children, classes, handleClick}) {
  return (
    <Tooltip title={title}>
      <MuiIconButton onClick={handleClick} className={classes}>
        {children}
      </MuiIconButton>
    </Tooltip>
  )
}

IconButton.propTypes = {
  children: node.isRequired,
  handleClick: func.isRequired,
  title: string,
  ...classesProps,
}

IconButton.defaultProps = {
  title: null,
}

export default IconButton
