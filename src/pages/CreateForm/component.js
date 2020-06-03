import React, {useEffect, useState} from 'react'

import * as Yup from 'yup'
import {Grid, MenuItem, Paper} from '@material-ui/core'
import {makeRequired, makeValidate, TextField} from 'mui-rff'

import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import {TYPES} from 'common/constants/resources_type'
import CTAButton from 'common/components/CTAButton'
import Form from '../../common/components/Form/component'

import {classes as classesProps} from 'common/props'

function CreateForm() {
  const [types, setTypes] = useState({})

  // TODO déplacer le callApi pour pouvoir l'utiliser dans Home
  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, TYPES)

    callApi(url, GET)
      .then(({data}) => {
        setTypes(data)
        console.log(data)
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])
  const recipeTypes = [types]

  const schema = Yup.object().shape({
    ingredients: Yup.string().required(),
    instruction: Yup.string().required(),
    name: Yup.string().required(),
    preparationTime: Yup.number().required(),
    quantity: Yup.number().required(),
    quantityType: Yup.string().required(),
    recipeType: Yup.string().required(),
  })
  const validate = makeValidate(schema)
  const required = makeRequired(schema)

  console.log(types)

  // const onSubmit = async (values) => {
  //   const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  //
  //   await sleep(300)
  //   window.alert(JSON.stringify(values, 0, 2))
  // }

  return (
    <div>
      <Form validate={validate} onSubmit="test">
        <Paper>
          <Grid container alignItems="flex-start" spacing={2}>
            <TextField
              variant="outlined"
              margin="normal"
              required={required.name}
              fullWidth
              // label={t('loginPage.form.label.username')}
              name="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={required.preparationTime}
              fullWidth
              // label={t('loginPage.form.label.username')}
              name="preparationTime"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={required.instruction}
              fullWidth
              // label={t('loginPage.form.label.username')}
              name="instruction"
              autoFocus
            />
            <TextField select name="recipeType" label="Select" helperText="Please select your recipe type">
              {recipeTypes.map((recipeType) => (
                <MenuItem key={recipeType}>{recipeType}</MenuItem>
              ))}
            </TextField>
            <Grid item>
              <CTAButton label="submit" type="submit" variant="contained">
                Submit
              </CTAButton>
            </Grid>
          </Grid>
        </Paper>
      </Form>
    </div>
  )
}

CreateForm.propTypes = {
  ...classesProps,
}

CreateForm.defaultProps = {}

export default CreateForm
