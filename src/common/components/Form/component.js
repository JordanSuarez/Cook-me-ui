import React from 'react'

import {Form as FormRff} from 'react-final-form'
import {func, node} from 'prop-types'

import {classes as classesProps} from 'common/props'

function Form({children, onSubmit, validate, classes}) {
  return (
    <FormRff
      onSubmit={onSubmit}
      validate={validate}
      render={({handleSubmit}) => (
        <form onSubmit={handleSubmit} noValidate className={classes}>
          {children}
        </form>
      )}
    />
  )
}

Form.propTypes = {
  children: node.isRequired,
  onSubmit: func.isRequired,
  validate: func.isRequired,
  ...classesProps,
}

Form.defaultProps = {}

export default Form
