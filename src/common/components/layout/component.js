import React from 'react'

import {Container} from '@material-ui/core'
import {node} from 'prop-types'

import {classes as classesProps} from '../../props'

function Layout({children, classes}) {
  return (
    <Container maxWidth="md" className={classes.root}>
      {children}
    </Container>
  )
}

Layout.propTypes = {
  children: node.isRequired,
  ...classesProps,
}

export default Layout
