import React from 'react'

import {Button} from '@material-ui/core'

import {func, string} from 'prop-types'

import {classes as classesProps} from '../../props'

function CTAButton({label, handleClick, type, classes}) {
  return (
    <Button variant="contained" type={type} color="primary" onClick={handleClick} className={classes.button}>
      {label}
    </Button>
  )
}

CTAButton.propTypes = {
  handleClick: func,
  label: string.isRequired,
  type: string,
  ...classesProps,
}

CTAButton.defaultProps = {
  handleClick: Function.prototype,
  type: 'button',
}

export default CTAButton
