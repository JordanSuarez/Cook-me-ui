import * as Yup from 'yup'

export default Yup.object().shape({
  ingredient: Yup.number(),
  instruction: Yup.string(),
  name: Yup.string(),
  preparationTime: Yup.number(),
  quantityType: Yup.number(),
  quantityValue: Yup.number(),
  type: Yup.number(),
})
