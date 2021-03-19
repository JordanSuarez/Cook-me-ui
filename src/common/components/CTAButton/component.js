import React from 'react'

import {Button} from '@material-ui/core'

import {bool, func, node, string} from 'prop-types'

import {classes as classesProps} from '../../props'

function CTAButton({label, handleClick, type, classes, children, disabled}) {
  return (
    <Button variant="contained" type={type} color="primary" onClick={handleClick} className={classes.button} disabled={disabled}>
      {label}
      {children}
    </Button>
  )
}

CTAButton.propTypes = {
  children: node,
  disabled: bool,
  handleClick: func,
  label: string.isRequired,
  type: string,
  ...classesProps,
}

CTAButton.defaultProps = {
  children: null,
  disabled: false,
  handleClick: Function.prototype,
  type: 'button',
}

export default CTAButton
