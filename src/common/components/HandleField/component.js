import React from 'react'

import {any, func, node, number, objectOf, string} from 'prop-types'
import {get} from 'lodash'
import {Grid} from '@material-ui/core'
import {TextField} from 'mui-rff'

import IconButton from 'common/components/IconButton'
import SelectField from '../SelectField'

import {classes as classesProps} from 'common/props'

function HandleField({id, children, onClick, classes, items, title}) {
  return (
    <div key={id}>
      <Grid container justify="space-between" spacing={4}>
        <Grid item xs={8} sm={7} md={6} lg={5} xl={4}>
          <SelectField name="ingredient" label="ingredients" items={get(items, 'ingredients', [])} />
        </Grid>
        <IconButton title={title} onClick={onClick}>
          {children}
        </IconButton>
      </Grid>
      <Grid container justify="flex-start" spacing={2}>
        <Grid item xs={7} sm={6} md={5} lg={4} xl={3}>
          <SelectField name="quantityType" label="quantity types" items={get(items, 'quantityTypes', [])} />
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={2} xl={3} className={classes.quantity}>
          <TextField name="quantityValue" type="number" margin="normal" label="quantity" />
        </Grid>
      </Grid>
    </div>
  )
}

HandleField.propTypes = {
  children: node.isRequired,
  id: number,
  items: objectOf(any),
  label: string,
  name: string,
  onClick: func,
  ...classesProps,
}

HandleField.defaultProps = {
  id: null,
  items: {},
  label: null,
  name: null,
  onClick: Function.prototype,
}

export default HandleField
