import React from 'react'

import {Button} from '@material-ui/core'

import {func, string} from 'prop-types'

function CTAButton({label, handleClick}) {
  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      {label}
    </Button>
  )
}

CTAButton.propTypes = {
  handleClick: func,
  label: string.isRequired,
}

CTAButton.defaultProps = {
  handleClick: Function.prototype,
}

export default CTAButton
