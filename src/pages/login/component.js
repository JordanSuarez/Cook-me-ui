import React from 'react'

import {Avatar, Button, Grid, Paper, Typography} from '@material-ui/core'
import {useHistory} from 'react-router-dom'

import LoginIcon from '@material-ui/icons/LockOutlined'

import {TextField} from 'mui-rff'

import {useTranslation} from 'react-i18next'

import {Form} from 'react-final-form'

import {classes as classesProps} from 'common/props'
import {getHomeRoute} from 'common/routing/routesResolver'
import {handleLogin} from 'common/helpers/repository'

function Login({classes}) {
  const history = useHistory()
  const {t} = useTranslation()

  function onSubmit(values) {
    handleLogin(values).then((logged) => (logged ? history.push(getHomeRoute()) : null))
  }

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
        <div className={classes.paper}>
          <Avatar className={classes.icon}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('login.title')}
          </Typography>
          <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
              <form onSubmit={handleSubmit} noValidate className={classes.form}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Username"
                  name="username"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  name="password"
                  autoComplete="current-password"
                  type="password"
                />
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                  Login
                </Button>
              </form>
            )}
          />
        </div>
      </Grid>
    </Grid>
  )
}

Login.propTypes = {
  ...classesProps,
}

Login.defaultProps = {}

export default Login
