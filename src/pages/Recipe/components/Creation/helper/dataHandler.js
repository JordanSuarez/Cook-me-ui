export default ({ingredientFields, requiredIngredients, recipeType, ...values}) => ({
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
  type: recipeType,
})
