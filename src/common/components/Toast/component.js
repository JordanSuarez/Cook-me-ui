import React from 'react'

import {Alert, AlertTitle} from '@material-ui/lab'

import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'

import {classes as classesProps} from '../../props'

function Toast({classes, displayError, displaySuccess, hideToast}) {
  const [open, setOpen] = React.useState(true)

  function handleClose() {
    setOpen(!open)
    hideToast(true)
  }

  // TODO trigger hideToast on setTimetout
  // if (!displaySuccess) return null

  // Si displaySuccess est true, afficher le toast success
  // Si displayError est true, afficher le toast error
  return (
    <div className={classes.root}>
      {displaySuccess && (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert
            severity="success"
            action={
              <IconButton aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>success bg</AlertTitle>
            Bravo resselem
          </Alert>
        </Snackbar>
      )}
      {displayError && (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
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
      )}
    </div>
  )
}

Toast.propTypes = {
  ...classesProps,
}

export default Toast
