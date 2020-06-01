import React from 'react'

import {Alert, AlertTitle} from '@material-ui/lab'
import {bool, func} from 'prop-types'
import {Grid, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Snackbar from '@material-ui/core/Snackbar'

import {classes as classesProps} from '../../props'

function Toast({classes, displayError, displaySuccess, hideToast}) {
  // TODO trigger hideToast on setTimetout
  // if (!displaySuccess) return null

  function handleClose() {
    hideToast(true)
  }

  // Si displaySuccess est true, afficher le toast success
  // Si displayError est true, afficher le toast error
  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={8} md={5}>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={displaySuccess}
          autoHideDuration={5000}
          onClose={handleClose}
          className={classes.toast}
        >
          <Alert
            severity="success"
            action={
              <IconButton aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>success bg</AlertTitle>
            Bravo Resselem!
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={displayError}
          autoHideDuration={5000}
          onClose={handleClose}
          className={classes.toast}
        >
          <Alert
            severity="error"
            action={
              <IconButton aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>error</AlertTitle>
            Bravo Nils!
          </Alert>
        </Snackbar>
      </Grid>
    </div>
  )
}

Toast.propTypes = {
  displayError: bool.isRequired,
  displaySuccess: bool.isRequired,
  hideToast: func.isRequired,
  ...classesProps,
}

export default Toast
