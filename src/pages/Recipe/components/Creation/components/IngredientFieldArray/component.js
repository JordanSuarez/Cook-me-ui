import React from 'react'

import {any, objectOf} from 'prop-types'
import {FieldArray} from 'react-final-form-arrays'

import IngredientFields from '../IngredientFields'

function IngredientFieldArray({items}) {
  return (
    <FieldArray name="ingredientFields">
      {({fields}) =>
        fields.map((name, index) => {
          return <IngredientFields name={name} items={items} onClick={() => fields.remove(index)} displayButton />
        })
      }
    </FieldArray>
  )
}

IngredientFieldArray.propTypes = {
  items: objectOf(any),
}

IngredientFieldArray.defaultProps = {
  items: {},
}

export default IngredientFieldArray
