import React from 'react'

import {Button} from '@material-ui/core'

import {string} from 'prop-types'

function Submit(children) {
  return (
    <Button variant="contained" color="primary">
      {children}
    </Button>
  )
}

Submit.propTypes = {
  children: string.isRequired,
}

export default Submit
