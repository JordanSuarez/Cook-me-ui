import React from 'react'

import {bool, func, string} from 'prop-types'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core'

import {classes as classesProps} from 'common/props'
import CTAButton from '../CTAButton'

function AlertDialog({open, title, content, labelButtonAccept, labelButtonRefuse, cancelOnClick, acceptOnClick, classes}) {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <CTAButton handleClick={acceptOnClick} label={labelButtonAccept} />
        <Button variant="contained" onClick={cancelOnClick} className={classes.acceptButton}>
          {labelButtonRefuse}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

AlertDialog.propTypes = {
  acceptOnClick: func.isRequired,
  cancelOnClick: func.isRequired,
  content: string.isRequired,
  labelButtonAccept: string.isRequired,
  labelButtonRefuse: string.isRequired,
  open: bool.isRequired,
  title: string.isRequired,
  ...classesProps,
}

export default AlertDialog
