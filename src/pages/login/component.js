import React from 'react'

import {Grid, Typography} from '@material-ui/core'

import Button from '@material-ui/core/Button'

import TextField from '@material-ui/core/TextField'

import {classes as classesProps} from 'common/props'

import FormSection from 'common/components/formSection'

import Layout from 'common/components/layout'

function Login({classes}) {
  function submit() {}
  const {handleData, handleSubmit, values} = FormSection(submit)

  return (
    <Layout>
      <Grid item xs={12} sm={6}>
        <Typography variant="h1" component="h2" className={classes.title}>
          LOGIN SMARTPHONE
        </Typography>
      </Grid>
      <div title="Login">
        <TextField required id="login" label="Login" variant="outlined" value={values.login} onChange={handleData} />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          value={values.password}
          onChange={handleData}
        />
        <Button variant="contained" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </div>
    </Layout>
  )
}

Login.propTypes = {
  ...classesProps,
}

Login.defaultProps = {}

export default Login
