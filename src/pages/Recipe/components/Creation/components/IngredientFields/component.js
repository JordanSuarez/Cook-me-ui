import React from 'react'

import {any, bool, func, objectOf, string} from 'prop-types'
import {get} from 'lodash'
import {Grid} from '@material-ui/core'
import {TextField} from 'mui-rff'
import RemoveIcon from '@material-ui/icons/DeleteForeverOutlined'

import IconButton from 'common/components/IconButton'
import SelectField from 'common/components/SelectField'

import {classes as classesProps} from 'common/props'

function IngredientFields({classes, items, name, displayButton, onClick}) {
  return (
    <div key={name} className={classes.border}>
      <Grid container justify="space-between">
        <Grid item xs={8} sm={7} md={6} lg={5} xl={4}>
          <SelectField name={`${name}.name`} label="ingredients" items={get(items, 'ingredients', [])} />
        </Grid>
        {displayButton && (
          <IconButton variant="contained" onClick={onClick} size="small" color="primary.medium" title="remove ingredient">
            <RemoveIcon />
          </IconButton>
        )}
      </Grid>
      <Grid container justify="flex-start" spacing={2}>
        <Grid item xs={7} sm={6} md={5} lg={4} xl={3}>
          <SelectField name={`${name}.quantityType`} label="quantity types" items={get(items, 'quantityTypes', [])} />
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={2} xl={3} className={classes.quantity}>
          <TextField name={`${name}.quantityValue`} type="number" margin="normal" label="quantity" />
        </Grid>
      </Grid>
    </div>
  )
}

IngredientFields.propTypes = {
  displayButton: bool,
  items: objectOf(any),
  key: string,
  onClick: func,
  ...classesProps,
}

IngredientFields.defaultProps = {
  displayButton: true,
  items: {},
  key: null,
  onClick: null,
}

export default IngredientFields
