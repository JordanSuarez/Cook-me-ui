import {get} from 'lodash'

export default ({requiredIngredients, recipeType, ...values}) => {
  const ingredientFields = get(values, 'ingredientFields', []) || []

  return {
    ingredients: [
      {
        id: requiredIngredients.ingredient,
        quantity: {
          value: parseInt(requiredIngredients.quantityValue, 10),
          quantityType: {
            id: requiredIngredients.quantityType,
          },
        },
      },
      ...ingredientFields.map((ingredientField) => ({
        id: ingredientField.ingredient,
        quantity: {
          value: parseInt(ingredientField.quantityValue, 10),
          quantityType: {
            id: ingredientField.quantityType,
          },
        },
      })),
    ],
    name: values.name,
    preparationTime: parseInt(values.preparationTime, 10),
    instruction: values.instruction,
    type: parseInt(recipeType, 10),
  }
}
