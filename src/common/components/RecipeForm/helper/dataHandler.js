import {find, get} from 'lodash'

import {INGREDIENTS, QUANTITY_TYPE, RECIPES_TYPE} from 'common/constants/resources'

export const recipeElements = (values) => {
  const findDataByResource = (data, resource) => find(data, (value) => value.config.url === `/${resource}`)

  return {
    ingredients: get(findDataByResource(values, INGREDIENTS), 'data'),
    quantityTypes: get(findDataByResource(values, QUANTITY_TYPE), 'data'),
    recipeTypes: get(findDataByResource(values, RECIPES_TYPE), 'data'),
  }
}

export const getFormattedFormValues = ({requiredIngredients, recipeType, ...values}) => {
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
