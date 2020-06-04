import React from 'react'

import {Button} from '@material-ui/core'

import {func, string} from 'prop-types'

function CTAButton({label, handleClick, type}) {
  return (
    <Button variant="contained" type={type} color="primary" onClick={handleClick}>
      {label}
    </Button>
  )
}

CTAButton.propTypes = {
  handleClick: func,
  label: string.isRequired,
  type: string,
}

CTAButton.defaultProps = {
  handleClick: Function.prototype,
  type: 'button',
}

export default CTAButton
