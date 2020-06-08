import React from 'react'

import {any, arrayOf, string} from 'prop-types'
import {get} from 'lodash'
import {Grid} from '@material-ui/core'
import {TextField} from 'mui-rff'

import SelectField from '../SelectField'

import {classes as classesProps} from 'common/props'

function HandleField({children, classes, items}) {
  return (
    <div>
      <Grid container justify="space-between" spacing={4}>
        <Grid item xs={8} sm={7} md={6} lg={5} xl={4}>
          <SelectField name="ingredient" label="ingredients" items={get(items, 'ingredients', [])} />
        </Grid>
        <Grid>{children}</Grid>
      </Grid>
      <Grid container justify="flex-start" spacing={2} className={classes}>
        <Grid item xs={7} sm={6} md={5} lg={4} xl={3}>
          <SelectField name="quantityType" label="quantity types" items={get(items, 'quantityTypes', [])} />
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={2} xl={3} className={classes}>
          <TextField name="quantityValue" type="number" margin="normal" label="quantity" />
        </Grid>
      </Grid>
    </div>
  )
}

HandleField.propTypes = {
  items: arrayOf(any),
  label: string,
  name: string,
  ...classesProps,
}

HandleField.defaultProps = {
  items: [],
  label: null,
  name: null,
}

export default HandleField
