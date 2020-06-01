import React, {useState} from 'react'

import {Avatar, Button, Grid, Hidden, Typography} from '@material-ui/core'
import {Form} from 'react-final-form'
import {func} from 'prop-types'
import {TextField} from 'mui-rff'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import LoginIcon from '@material-ui/icons/LockOutlined'

import {getHomeRoute} from 'common/routing/routesResolver'
import {handleLogin} from 'common/helpers/repository'

import {classes as classesProps} from 'common/props'
import {ERROR, SUCCESS} from '../../common/constants/severity'

function Login({classes, showToast}) {
  const history = useHistory()
  const {t} = useTranslation()
  const [errorDisplay, setErrorDisplay] = useState(false)

  // Si je me log je retourne le toast success, sinon le toast error
  // Si la requête est rejeté, on passe true à [errorDisplay] pour afficher une error sur le form
  function onSubmit(values) {
    handleLogin(values)
      .then((logged) => {
        if (logged) {
          history.push(getHomeRoute())
        }

        return showToast(true, SUCCESS, t('loginPage.toast.success.title'), t('loginPage.toast.success.content'))
      })
      .catch(() => {
        setErrorDisplay(true)

        return showToast(true, ERROR, t('loginPage.toast.error.title'), t('loginPage.toast.error.content'))
      })
  }

  // Si il n'y a pas de value dans username ou password, je renvois une error
  //TODO renvoyer une erreur si le password OU le username sont inconnu du backend
  function validate(values) {
    const errors = {}

    if (!values.username) {
      errors.username = t('loginPage.form.label.required.username')
    }
    if (!values.password) {
      errors.password = t('loginPage.form.label.required.password')
    }
    if (errorDisplay && (values.username || values.password)) {
      errors.username = 'Il faudra connecter le backend pour savoir si le username est connu'
      errors.password = 'Il faudra connecter le backend pour savoir si le password est connu'
    }

    return errors
  }

  //Si un field est focus, je set à false le status de [errorDisplay]
  function onFocus() {
    return setErrorDisplay(false)
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
                      required
                      fullWidth
                      label={t('loginPage.form.label.username')}
                      name="username"
                      onFocus={onFocus}
                      autoFocus
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
                      onFocus={onFocus}
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

Login.defaultProps = {}

export default Login
