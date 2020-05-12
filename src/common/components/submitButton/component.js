import React from 'react'

import {Button} from '@material-ui/core'

import {string} from 'prop-types'

function SubmitButton({children}) {
  return (
    <Button variant="contained" color="primary">
      {children}
    </Button>
  )
}

SubmitButton.propTypes = {
  children: string.isRequired,
}

SubmitButton.defaultProps = {}

export default SubmitButton
