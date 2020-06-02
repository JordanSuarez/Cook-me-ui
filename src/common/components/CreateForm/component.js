import React from 'react'

import * as Yup from 'yup'
import {Grid, MenuItem, Paper} from '@material-ui/core'
import {makeRequired, makeValidate, TextField} from 'mui-rff'

import CTAButton from '../CTAButton'
import Form from '../Form/component'

import {classes as classesProps} from 'common/props'

function CreateForm() {
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

  // call les recipeTypes sinon Maître pas content :)
  const recipeTypes = [
    {
      value: 'starter',
      label: 'starter',
    },
    {
      value: 'dish',
      label: 'dish',
    },
    {
      value: 'desert',
      label: 'desert',
    },
  ]

  const onSubmit = async (values) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  return (
    <Form validate={validate} onSubmit={onSubmit}>
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
              <MenuItem key={recipeType.value} value={recipeType.value}>
                {recipeType.label}
              </MenuItem>
            ))}
          </TextField>
          <Grid item>
            <CTAButton type="submit" variant="contained">
              Submit
            </CTAButton>
          </Grid>
        </Grid>
      </Paper>
    </Form>
  )
}

CreateForm.propTypes = {
  ...classesProps,
}

CreateForm.defaultProps = {}

export default CreateForm
