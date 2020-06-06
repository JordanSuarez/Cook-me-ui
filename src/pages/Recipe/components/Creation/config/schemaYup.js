import * as Yup from 'yup'

export const schema = Yup.object().shape({
  ingredient: Yup.number(),
  instruction: Yup.string().required(),
  name: Yup.string().required(),
  preparationTime: Yup.number(),
  quantityType: Yup.number(),
  quantityValue: Yup.number().required(),
  type: Yup.number(),
})
