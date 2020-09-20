import React from 'react'

import {Avatar, Button, Grid, Hidden, Typography} from '@material-ui/core'
import {Form} from 'react-final-form'
import {func} from 'prop-types'
import {useHistory} from 'react-router-dom'

import {TextField} from 'mui-rff'
import {useTranslation} from 'react-i18next'
import LoginIcon from '@material-ui/icons/LockOutlined'

import {getDishRoute} from 'common/routing/routesResolver'
import {handleLogin} from 'common/helpers/repository'

import {classes as classesProps} from 'common/props'
import {ERROR, SUCCESS} from 'common/constants/severity'

function Login({classes, showToast}) {
  const history = useHistory()
  const {t} = useTranslation()
  // const [errorDisplay, setErrorDisplay] = useState(false)

  //add an attribute to your state (errorDisplay, setErrorDisplay : useState)
  // function showError() {
  //   if (errorDisplay) {
  //     showToastError(true)
  //   }
  // }

  // Si je me log je retourne le toast success, sinon le toast error
  function onSubmit(values) {
    handleLogin(values)
      .then((logged) => {
        if (logged) {
          history.push(getDishRoute())
        }

        return showToast(true, SUCCESS, t('loginPage.toast.success.title'), t('loginPage.toast.success.content'))
      })
      .catch(() => showToast(true, ERROR, t('loginPage.toast.error.title'), t('loginPage.toast.error.content')))
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
    </div>
  )
}

Login.propTypes = {
  showToastError: func.isRequired,
  showToastSuccess: func.isRequired,
  ...classesProps,
}

Login.defaultProps = {}

export default Login
