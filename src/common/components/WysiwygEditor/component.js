import React from 'react'

import {string} from 'prop-types'

import 'react-quill/dist/quill.snow.css'
import {Field} from 'react-final-form'
import ReactQuill from 'react-quill'

import {classes as classesProps} from '../../props'

function WysiwygEditor({name, theme, classes}) {
  return (
    <div className={classes.text}>
      <Field name={name}>
        {({input: {value, onChange}}) => (
          <ReactQuill theme={theme} value={value} onChange={onChange} placeholder="Compose your recipe..." className={classes.textEditor} />
        )}
      </Field>
    </div>
  )
}

WysiwygEditor.propTypes = {
  name: string.isRequired,
  theme: string.isRequired,
  ...classesProps,
}

WysiwygEditor.defaultProps = {}

export default WysiwygEditor
