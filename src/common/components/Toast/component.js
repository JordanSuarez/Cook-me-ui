import React from 'react'

import {Alert, AlertTitle} from '@material-ui/lab'
import {bool, func, string} from 'prop-types'
import {Grid, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Snackbar from '@material-ui/core/Snackbar'

import {classes as classesProps} from '../../props'

function Toast({classes, isOpen, content, title, severity, hideToast}) {
  function handleClose() {
    hideToast()
  }

  // Si displaySuccess est true, afficher le toast success
  // Si displayError est true, afficher le toast error
  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={8} md={5}>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isOpen}
          autoHideDuration={5000}
          onClose={handleClose}
          className={classes.toast}
        >
          <Alert
            severity={severity}
            action={
              <IconButton aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>{title}</AlertTitle>
            {content}
          </Alert>
        </Snackbar>
      </Grid>
    </div>
  )
}

Toast.propTypes = {
  content: string.isRequired,
  hideToast: func.isRequired,
  isOpen: bool.isRequired,
  severity: string.isRequired,
  title: string.isRequired,
  ...classesProps,
}

export default Toast
