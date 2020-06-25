import React from 'react'

import {Button} from '@material-ui/core'

import {func, node, string} from 'prop-types'

import {classes as classesProps} from '../../props'

function CTAButton({label, handleClick, type, classes, children}) {
  return (
    <Button variant="contained" type={type} color="primary" onClick={handleClick} className={classes.button}>
      {label}
      {children}
    </Button>
  )
}

CTAButton.propTypes = {
  children: node,
  handleClick: func,
  label: string.isRequired,
  type: string,
  ...classesProps,
}

CTAButton.defaultProps = {
  children: null,
  handleClick: Function.prototype,
  type: 'button',
}

export default CTAButton
