import React from 'react'

import {any, arrayOf, string} from 'prop-types'

import {MenuItem} from '@material-ui/core'
import {Select} from 'mui-rff'

// eslint-disable-next-line react/prop-types
function SelectField({name, label, items, value}) {
  return (
    <Select name={name} label={label} value={value}>
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
