import React from 'react'

import * as Yup from 'yup'
import {Avatar, Button, Grid, Hidden, Typography} from '@material-ui/core'
import {Form} from 'react-final-form'
import {func} from 'prop-types'
import {makeRequired, makeValidate, TextField} from 'mui-rff'

import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import LoginIcon from '@material-ui/icons/LockOutlined'

import {getHomeRoute} from 'common/routing/routesResolver'
import {handleLogin} from 'common/helpers/repository'

import {classes as classesProps} from 'common/props'
import {ERROR, SUCCESS} from 'common/constants/severity'

function Login({classes, showToast}) {
  const {t} = useTranslation()
  const history = useHistory()

  // On utilise Yup pour définir les champs 'password' et 'username' required
  const schema = Yup.object().shape({
    password: Yup.string().required(),
    username: Yup.string().required(),
  })

  const validate = makeValidate(schema)
  const required = makeRequired(schema)

  // Si je me log je retourne le toast success, sinon le toast error
  function onSubmit(values) {
    handleLogin(values)
      .then((logged) => {
        if (logged) {
          history.push(getHomeRoute())
        }

        return showToast(true, SUCCESS, t('loginPage.toast.success.title'), t('loginPage.toast.success.content'))
      })
      .catch(() => {
        return showToast(true, ERROR, t('loginPage.toast.error.title'), t('loginPage.toast.error.content'))
      })
  }

  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Hidden xsDown>
          <Grid item xs={12} sm={4} md={6} lg={7} xl={8} className={classes.image} />
        </Hidden>
        <Grid item xs={12} sm={8} md={6} lg={5} xl={4}>
          <div className={classes.paper}>
            <Avatar className={classes.icon}>
              <LoginIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t('loginPage.title')}
            </Typography>
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} noValidate className={classes.form}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required={required.username}
                    fullWidth
                    label={t('loginPage.form.label.username')}
                    name="username"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required={required.password}
                    fullWidth
                    label={t('loginPage.form.label.password')}
                    name="password"
                    autoComplete="current-password"
                    type="password"
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
    </div>
  )
}

Login.propTypes = {
  showToast: func.isRequired,
  ...classesProps,
}

export default Login
