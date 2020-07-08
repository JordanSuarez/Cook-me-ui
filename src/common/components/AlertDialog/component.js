import React from 'react'

import {bool, func, string} from 'prop-types'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core'

import {classes as classesProps} from 'common/props'
import CTAButton from '../CTAButton'

function AlertDialog({open, title, content, agreeLabelButton, disagreeLabelButton, onCancel, onAgree, classes}) {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <CTAButton handleClick={onAgree} label={agreeLabelButton} />
        <Button variant="contained" onClick={onCancel} className={classes.acceptButton}>
          {disagreeLabelButton}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

AlertDialog.propTypes = {
  agreeLabelButton: string.isRequired,
  content: string.isRequired,
  disagreeLabelButton: string.isRequired,
  onAgree: func.isRequired,
  onCancel: func.isRequired,
  open: bool.isRequired,
  title: string.isRequired,
  ...classesProps,
}

export default AlertDialog
