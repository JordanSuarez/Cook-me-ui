import React from 'react'

import {any, bool, func, objectOf, string} from 'prop-types'
import {Divider, Grid} from '@material-ui/core'
import {get} from 'lodash'
import {TextField} from 'mui-rff'
import DeleteIcon from '@material-ui/icons/Delete'

import IconButton from 'common/components/IconButton'
import SelectField from 'common/components/SelectField'

import {classes as classesProps} from 'common/props'

function IngredientFields({classes, items, name, displayButton, onClick}) {
  return (
    <div key={name} className={classes.border}>
      <Divider variant="middle" className={classes.divider} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={5} lg={5} xl={5}>
          <SelectField name={`${name}.ingredient`} label="ingredients" items={get(items, 'ingredients', [])} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <SelectField name={`${name}.quantityType`} label="quantity types" items={get(items, 'quantityTypes', [])} />
        </Grid>
        <Grid item xs={10} sm={3} md={2} lg={2} xl={2} className={classes.quantity}>
          <TextField name={`${name}.quantityValue`} type="number" margin="normal" label="quantity" />
        </Grid>
        <Grid item xs={2} sm={1} md={1} lg={1} xl={1} className={classes.button}>
          {displayButton && (
            <IconButton onClick={onClick} size="small" color="secondary" title="remove ingredient">
              <DeleteIcon />
            </IconButton>
          )}
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
