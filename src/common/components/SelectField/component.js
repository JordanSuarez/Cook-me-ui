import React from 'react'

import {any, arrayOf, string} from 'prop-types'

import {MenuItem} from '@material-ui/core'
import {Select} from 'mui-rff'

function SelectField({fieldName, label, items}) {
  console.log(items)
  if(!items || items.length === 0) return null
  return (
    <Select name={fieldName} label={label}>
      {items.map(({id, name}) => (
        <MenuItem key={id} value={id}>
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
  // fieldName: '',
  items: [],
  // label: '',
}

export default SelectField
