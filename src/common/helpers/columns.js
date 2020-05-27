export default (t) => {
  return [
    {
      name: 'name',
      label: `${t('recipe.list.table.name')}`,
    },
    {
      name: 'instruction',
      label: `${t('recipe.list.table.instruction')}`,
    },
    {
      name: 'preparationTime',
      label: `${t('recipe.list.table.preparationTime')}`,
    },
  ]
}
