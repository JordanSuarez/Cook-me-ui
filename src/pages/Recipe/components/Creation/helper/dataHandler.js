export default (values) => ({
  ingredients: [
    {
      id: values.ingredient,
      quantity: {
        type_id: values.quantityType,
        value: values.quantityValue,
      },
    },
  ],
  name: values.name,
  preparationTime: parseInt(values.preparationTime, 10),
  instruction: values.instruction,
  type: values.recipeType,
})
