import React from 'react'

import {any, arrayOf, string} from 'prop-types'

import {MenuItem} from '@material-ui/core'
import {Select} from 'mui-rff'

function SelectField({fieldName, label, items}) {
  return (
    <Select name={fieldName} label={label}>
      {items.map(({name}) => (
        <MenuItem key={name} id={name} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  )
}

SelectField.propTypes = {
  fieldName: string,
  items: arrayOf(any),
  label: string,
}

SelectField.defaultProps = {
  fieldName: '',
  items: [],
  label: '',
}

export default SelectField
