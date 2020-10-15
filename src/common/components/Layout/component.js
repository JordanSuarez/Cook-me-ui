import React from 'react'

import {Container} from '@material-ui/core'
import {node} from 'prop-types'

import {classes as classesProps} from '../../props'
import NavBar from '../NavBar'

function Layout({children, classes}) {
  return (
    <div>
      <NavBar />
      <Container maxWidth="md" className={classes.root}>
        {children}
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: node.isRequired,
  ...classesProps,
}

export default Layout
