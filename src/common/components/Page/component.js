import React from 'react'

import {node, string} from 'prop-types'
import Grid from '@material-ui/core/Grid'

import {Divider, Typography} from '@material-ui/core'

import {classes as classesProps} from '../../props'
import Layout from '../Layout'
import NavBar from '../NavBar/component'

function Page({children, classes, title}) {
  return (
    <Layout>
      <Grid item xs={12} sm={12} md={12}>
        <Typography component="h1" variant="h3" align="center" className={classes.title}>
          {title}
        </Typography>
        <Divider variant="middle" />
      </Grid>
      <NavBar />
      {children}
    </Layout>
  )
}

Page.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  ...classesProps,
}

export default Page
