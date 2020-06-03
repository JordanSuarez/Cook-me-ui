import React, {useEffect, useState} from 'react'

import * as Yup from 'yup'
import {Grid, MenuItem, Paper} from '@material-ui/core'
import {makeRequired, makeValidate, TextField} from 'mui-rff'

import {useTranslation} from 'react-i18next'

import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import {TYPES} from 'common/constants/resources_type'
import CTAButton from 'common/components/CTAButton'
import Form from 'common/components/Form'
import Page from 'common/components/Page'

import {classes as classesProps} from 'common/props'

function CreationForm() {
  const {t} = useTranslation()
  const [types, setTypes] = useState([])
  const [selectedType, setSelectedType] = useState('')

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, TYPES)

    callApi(url, GET)
      .then(({data}) => {
        setTypes(data)
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  const schema = Yup.object().shape({
    ingredients: Yup.string().required(),
    instruction: Yup.string().required(),
    name: Yup.string().required(),
    preparationTime: Yup.number(),
    quantity: Yup.number().required(),
    quantityType: Yup.string().required(),
    recipeType: Yup.object(),
  })
  const validate = makeValidate(schema)
  const required = makeRequired(schema)

  const handleOnSelectChange = (event) => {
    setSelectedType(event.target.value)
  }

  function onSubmit() {}

  return (
    <Page title={t('recipe.form.creation.title')}>
      <Form validate={validate} onSubmit={onSubmit} autoComplete="off">
        <Paper>
          <Grid>
            <TextField name="name" margin="normal" required={required.name} label={t('recipe.form.creation.name')} autoFocus />
            <TextField
              name="instruction"
              multiline
              margin="normal"
              required={required.instruction}
              label={t('recipe.form.creation.instruction')}
            />
            <TextField name="preparationTime" margin="normal" label={t('recipe.form.creation.preparationTime')} />
            <TextField
              name="recipeType"
              select
              value={selectedType}
              onChange={handleOnSelectChange}
              label={t('recipe.form.creation.recipeType')}
              helperText={t('recipe.form.creation.helperText')}
            >
              {types.map(({id, name}) => (
                <MenuItem key={id} value={id}>
                  {name}
                </MenuItem>
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
    </Page>
  )
}

CreationForm.propTypes = {
  ...classesProps,
}

export default CreationForm
