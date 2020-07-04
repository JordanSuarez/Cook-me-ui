import React from 'react'

import {bool, func, string} from 'prop-types'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core'

import CTAButton from '../CTAButton'

function AlertDialog({open, title, content, labelButtonAccept, labelButtonRefuse, cancelOnClick, acceptOnClick}) {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <CTAButton size="small" label={labelButtonAccept} handleClick={acceptOnClick} />
        <CTAButton color="secondary" size="small" handleClick={cancelOnClick} label={labelButtonRefuse} />
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
}

export default AlertDialog
