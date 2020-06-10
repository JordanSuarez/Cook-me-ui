import React, {useState} from 'react'

import {any, func, node, number, objectOf, string} from 'prop-types'
import {get} from 'lodash'
import {Grid} from '@material-ui/core'
import {TextField} from 'mui-rff'

import AddIcon from '@material-ui/icons/AddOutlined'

import RemoveIcon from '@material-ui/icons/RemoveOutlined'
import IconButton from 'common/components/IconButton'
import SelectField from 'common/components/SelectField'

import {classes as classesProps} from 'common/props'

import Button from '@material-ui/core/Button'

function IngredientFields({id, onRemove, onAdd, classes, items}) {
  return (
    <div key={id}>
      <Grid container justify="space-between" spacing={4}>
        <Grid item xs={8} sm={7} md={6} lg={5} xl={4}>
          <SelectField name={`ingredient_${id}`} label="ingredients" items={get(items, 'ingredients', [])} />
        </Grid>
        <Button onClick={onAdd}>
          <AddIcon />
        </Button>
        <Button onClick={() => onRemove(id)}>
          <RemoveIcon />
        </Button>
      </Grid>
      <Grid container justify="flex-start" spacing={2}>
        <Grid item xs={7} sm={6} md={5} lg={4} xl={3}>
          <SelectField name={`quantityType_${id}`} label="quantity types" items={get(items, 'quantityTypes', [])} />
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={2} xl={3} className={classes.quantity}>
          <TextField name={`quantityValue_${id}`} type="number" margin="normal" label="quantity" />
        </Grid>
      </Grid>
    </div>
  )
}

IngredientFields.propTypes = {
  children: node.isRequired,
  id: number,
  items: objectOf(any),
  label: string,
  name: string,
  onClick: func,
  ...classesProps,
}

IngredientFields.defaultProps = {
  id: null,
  items: {},
  label: null,
  name: null,
  onClick: Function.prototype,
}

export default IngredientFields
