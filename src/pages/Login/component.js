import React from 'react'

import {Avatar, Button, Container, Grid, Hidden, Paper, Typography} from '@material-ui/core'
import {useHistory} from 'react-router-dom'

import {Form} from 'react-final-form'

import {TextField} from 'mui-rff'
import {useTranslation} from 'react-i18next'
import LoginIcon from '@material-ui/icons/LockOutlined'

import {getHomeRoute} from 'common/routing/routesResolver'
import {handleLogin} from 'common/helpers/repository'

import {classes as classesProps} from 'common/props'

function Login({classes}) {
  const history = useHistory()
  const {t} = useTranslation()
  //add an attribute to your state (errorDisplay, setErrorDisplay : useState)

  function onSubmit(values) {
    handleLogin(values).then((logged) => (logged ? history.push(getHomeRoute()) : null))
  }

  return (
    <Container fixed>
      <Grid container spacing={3} className={classes.root}>
        <Hidden xsDown>
          <Grid item xs={12} sm={4} md={7} className={classes.image} />
        </Hidden>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
          <div className={classes.paper}>
            <Avatar className={classes.icon}>
              <LoginIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t('loginPage.title')}
            </Typography>
            <Form
              onSubmit={onSubmit}
              // validate={(values) => {
              // test if username and password are empty
              // if empty setErrorDisplay(true)
              // }}
              render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} noValidate className={classes.form}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label={t('loginPage.form.label.username')}
                    name="username"
                    autoFocus
                    // add props 'error' if and only if state attribute 'errorDisplay' is true
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label={t('loginPage.form.label.password')}
                    name="password"
                    autoComplete="current-password"
                    type="password"
                    // add props 'error' if and only if state attribute 'errorDisplay' is true
                  />
                  <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    {t('loginPage.form.button')}
                  </Button>
                </form>
              )}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

Login.propTypes = {
  ...classesProps,
}

Login.defaultProps = {}

export default Login
