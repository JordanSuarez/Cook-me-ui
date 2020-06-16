import React from 'react'

import {any, objectOf} from 'prop-types'
import {FieldArray} from 'react-final-form-arrays'

import IngredientFields from '../IngredientFields'

function IngredientFieldArray({items}) {
  return (
    <FieldArray name="ingredient">
      {({fields}) =>
        fields.map((name, index) => {
          return <IngredientFields key={name} name={name} items={items} onClick={() => fields.remove(index)} displayButton />
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
