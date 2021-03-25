import {get, isEmpty} from 'lodash'

export default (values) => {
  if (isEmpty(values)) {
    return values
  }

  const ingredients = values.ingredients.map((ingredient) => {
    return {
      id: ingredient.id,
      ingredient: ingredient.id,
      quantityType: get(ingredient, 'quantity.quantityType.id'),
      quantityValue: get(ingredient, 'quantity.value'),
    }
  })

  return {
    id: values.id,
    name: values.name,
    recipeType: values.type,
    preparationTime: values.preparationTime,
    instruction: values.instruction,
    ingredientFields: ingredients.slice(1, ingredients.length),
    requiredIngredients: ingredients[0],
  }
}
