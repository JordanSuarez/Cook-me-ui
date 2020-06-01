import React from 'react'

import {Alert, AlertTitle} from '@material-ui/lab'
import {bool, func} from 'prop-types'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
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
      <Snackbar open={displaySuccess} autoHideDuration={5000} onClose={handleClose}>
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
      <Snackbar open={displayError} autoHideDuration={5000} onClose={handleClose}>
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
