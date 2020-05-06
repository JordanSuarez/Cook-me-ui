import React from 'react'

import {Grid, Typography} from '@material-ui/core'

import {classes as classesProps} from 'common/props'
import Layout from 'common/components/layout'

function Login({classes}) {
  return (
    <Layout>
      <Grid item xs={12} sm={6}>
        <Typography variant="h1" component="h2" className={classes.title}>
          LOGIN SMARTPHONE
        </Typography>
      </Grid>
    </Layout>
  )
}

Login.propTypes = {
  ...classesProps,
}

Login.defaultProps = {}

export default Login
