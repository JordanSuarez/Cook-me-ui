import React, {useState} from 'react'

import {any, objectOf} from 'prop-types'
import {FieldArray} from 'react-final-form-arrays'

import IngredientFields from '../IngredientFields'

// eslint-disable-next-line react/prop-types
function IngredientFieldArray({items, values}) {
  // eslint-disable-next-line no-unused-vars
  const [ingredient, setIngredient] = useState([{}])
  // eslint-disable-next-line no-unused-vars
  const [quantity, setQuantity] = useState()
  // eslint-disable-next-line no-unused-vars
  const [quantityTypeId, setQuantityType] = useState()

  console.log(values)

  return (
    <FieldArray name="ingredientFields">
      {({fields}) => {
        return fields.value.map((item, index) => {
          console.log(item, index)

          return (
            <IngredientFields
              key={item.id}
              name={item.name}
              items={items}
              onClick={() => fields.remove(index)}
              displayButton
              ingredient={item.id}
              quantity={item.quantity.id}
              quantityType={item.quantity.quantityType.id}
              handleChangeIngredient={(event) => setIngredient(event.currentTarget.value)}
              handleChangeQuantity={(event) => setQuantity(event.currentTarget.value)}
              handleChangeQuantityType={(event) => setQuantityType(event.currentTarget.value)}
            />
          )
        })
      }}
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
