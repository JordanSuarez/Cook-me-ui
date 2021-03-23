import * as Yup from 'yup'

export default ({preparationTime, name}) =>
  Yup.object().shape({
    ingredient: Yup.number(),
    instruction: Yup.string(),
    name: Yup.string().required(name.required),
    preparationTime: Yup.number().required(preparationTime.required).typeError(preparationTime.typeError),
    quantityType: Yup.number(),
    quantityValue: Yup.number(),
    type: Yup.number(),
  })
