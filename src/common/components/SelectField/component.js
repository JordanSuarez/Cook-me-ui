import React from 'react'

import {any, arrayOf, string} from 'prop-types'

import {MenuItem} from '@material-ui/core'
import {Select} from 'mui-rff'

function SelectField({name, label, items}) {
  return (
    <Select name={name} label={label}>
      {items.map(({id, name: itemName}) => (
        <MenuItem key={id} value={id}>
          {itemName}
        </MenuItem>
      ))}
    </Select>
  )
}

SelectField.propTypes = {
  items: arrayOf(any),
  label: string,
  name: string,
}

SelectField.defaultProps = {
  items: [],
  label: null,
  name: null,
}

export default SelectField
