import {get} from 'lodash'

export default ({requiredIngredients, recipeType, ...values}) => {
  const ingredientFields = get(values, 'ingredientFields', []) || []

  return {
    ingredients: [
      {
        id: requiredIngredients.ingredient,
        quantity: {
          type_id: requiredIngredients.quantityType,
          value: requiredIngredients.quantityValue,
        },
      },
      ...ingredientFields.map((ingredientField) => ({
        id: ingredientField.ingredient,
        quantity: {
          type_id: ingredientField.quantityType,
          value: ingredientField.quantityValue,
        },
      })),
    ],
    name: values.name,
    preparationTime: parseInt(values.preparationTime, 10),
    instruction: values.instruction,
    type: parseInt(recipeType, 10),
  }
}
