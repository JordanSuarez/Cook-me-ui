import React from 'react'

import {Alert, AlertTitle} from '@material-ui/lab'

import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'

import {classes as classesProps} from '../../props'

/**
 * @return {null}
 */
function Toast({classes, displayError, displaySuccess}) {
  const [open, setOpen] = React.useState(true)

  function handleClose() {
    return setOpen(!open)
  }

  // TODO trigger hideToast on setTimetout
  if (!displaySuccess) return null

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
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>error</AlertTitle>
          Bravo Nils
        </Alert>
      )}
    </div>
  )
}

Toast.propTypes = {
  ...classesProps,
}

export default Toast
