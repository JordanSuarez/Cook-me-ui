import React, {useState} from 'react'

import {Grid, Typography} from '@material-ui/core'

import Button from '@material-ui/core/Button'

import TextField from '@material-ui/core/TextField'

import {classes as classesProps} from 'common/props'

import Layout from 'common/components/layout'

const Login = () => {
  const classes = classesProps
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [helperText, setHelperText] = useState('')
  const [error, setError] = useState(false)

  const handleLogin = () => {
    if (login === 'test' && password === 'test') {
      setError(false)
      setHelperText('Login Successfully')
    } else {
      setError(true)
      setHelperText('Incorrect username or password')
    }
  }

  return (
    <Layout>
      <Grid item xs={12} sm={6}>
        <Typography variant="h1" component="h2" className={classes.title}>
          LOGIN SMARTPHONE
        </Typography>
      </Grid>
      <div title="Login">
        <TextField required id="login" label="Login" variant="outlined" error={error} onChange={(e) => setLogin(e.target.value)} />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          helperText={helperText}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleLogin}>
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
