import React from 'react'

import {node} from 'prop-types'
import Grid from '@material-ui/core/Grid'

import {classes as classesProps} from '../../props'

function Layout({children, classes}) {
  return (
    <Grid container spacing={3} className={classes.root}>
      {children}
    </Grid>
  )
}

Layout.propTypes = {
  children: node.isRequired,
  ...classesProps,
}

export default Layout
