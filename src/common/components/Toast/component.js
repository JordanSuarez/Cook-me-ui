import React from 'react'

import {Alert, AlertTitle} from '@material-ui/lab'

import {classes as classesProps} from '../../props'

function Toast({severity, title, content, classes, display /*hideToast*/}) {
  // TODO trigger hideToast on setTimetout
  if (!display) return null

  return (
    <div className={classes.root}>
      <Alert severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {content}
      </Alert>
    </div>
  )
}

Toast.propTypes = {
  ...classesProps,
}

export default Toast
