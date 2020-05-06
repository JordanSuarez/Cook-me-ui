import React from 'react'

import {node} from 'prop-types'
import Grid from '@material-ui/core/Grid'

import {classes as classesProps} from '../../props'

function Layout({children, classes}) {
  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {children}
      </Grid>
    </div>
  )
}

Layout.propTypes = {
  children: node.isRequired,
  ...classesProps,
}

export default Layout
