export default (t) => ({
  name: {
    required: t('recipe.page.form.error.field.name.required'),
  },
  preparationTime: {
    required: t('recipe.page.form.error.field.preparationTime.required'),
    typeError: t('recipe.page.form.error.field.preparationTime.typeError'),
  },
})
