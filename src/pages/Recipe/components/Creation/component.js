import React, {useEffect, useState} from 'react'

import * as Yup from 'yup'
import {Grid, MenuItem, Paper} from '@material-ui/core'
import {makeRequired, makeValidate, TextField} from 'mui-rff'

// import {useTranslation} from 'react-i18next'

import {ALL, ONE, TYPES} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET, POST} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {INGREDIENTS, QUANTITY_TYPE, RECIPES} from 'common/constants/resources'
import CTAButton from 'common/components/CTAButton'
import Form from 'common/components/Form'
import Page from 'common/components/Page'

import {classes as classesProps} from 'common/props'

function CreationForm({classes}) {
  // const {t} = useTranslation()

  const [listOfIngredients, setListOfIngredients] = useState([])
  const [quantityTypes, setQuantityTypes] = useState([])
  const [recipeTypes, setRecipeTypes] = useState([])

  const [selectedIngredient, setSelectedIngredient] = useState('')
  const [selectedQuantityType, setSelectedQuantityType] = useState('')
  const [selectedRecipeType, setSelectedRecipeType] = useState('')

  // Call pour récupérer les ingredients
  useEffect(() => {
    const url = getEndpoint(INGREDIENTS, GET, ALL)

    callApi(url, GET)
      .then(({data}) => {
        setListOfIngredients(data)
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  // Call pour récupérer les types de quantitées
  useEffect(() => {
    const url = getEndpoint(QUANTITY_TYPE, GET, ALL)

    callApi(url, GET)
      .then(({data}) => {
        setQuantityTypes(data)
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  // Call pour récupérer les types de recettes
  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, TYPES)

    callApi(url, GET)
      .then(({data}) => {
        setRecipeTypes(data)
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  const schema = Yup.object().shape({
    ingredient: Yup.number(),
    instruction: Yup.string().required(),
    name: Yup.string().required(),
    preparationTime: Yup.string(),
    quantity: Yup.string().required(),
    quantityType: Yup.number(),
    recipeType: Yup.array().of(Yup.number()).min(1),
  })

  const validate = makeValidate(schema)
  const required = makeRequired(schema)

  const handleIngredientOnSelectChange = (event) => {
    setSelectedIngredient(event.target.value)
  }
  const handleQuantityTypeOnSelectChange = (event) => {
    setSelectedQuantityType(event.target.value)
  }
  const handleRecipeTypeOnSelectChange = (event) => {
    setSelectedRecipeType(event.target.value)
  }

  function onSubmit(values) {
    const data = {
      ingredient: [
        {
          id: values.ingredient,
          quantity: {
            type_id: values.quantityType,
            number: values.quantity,
          },
        },
      ],
      name: values.name,
      preparationTime: parseInt(values.preparationTime, 10),
      instruction: values.instruction,
      type: values.recipeType,
    }

    console.log(data.recipeType, values.ingredient, values.quantityType)
    callApi(getEndpoint(RECIPES, POST, ONE), POST, data)
  }
  console.log(selectedRecipeType, selectedQuantityType, selectedIngredient)

  return (
    <Page title="test">
      <Grid container spacing={0} className={classes.root}>
        <Paper className={classes.paper}>
          <Form validate={validate} onSubmit={onSubmit} autoComplete="off">
            <Grid item xs={7}>
              <TextField name="name" margin="normal" required={required.name} label="name" autoFocus />
            </Grid>
            <Grid item xs={12} sm={11} md={10} lg={9} xl={8}>
              <TextField name="instruction" multiline margin="normal" required={required.instruction} label="instruction" />
            </Grid>
            <Grid container justify="space-between">
              <Grid item xs={8} sm={6} md={6} lg={5} xl={4}>
                <TextField
                  name="ingredient"
                  select
                  value={selectedIngredient}
                  onChange={handleIngredientOnSelectChange}
                  margin="normal"
                  label="ingredient"
                >
                  {listOfIngredients.map(({id, name}) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={3} sm={2} md={2} lg={1} xl={1}>
                <TextField name="quantity" type="number" margin="normal" label="quantity" />
              </Grid>
              <Grid item xs={5} sm={3} md={2} lg={2} xl={3}>
                <TextField
                  name="quantityType"
                  select
                  value={selectedQuantityType}
                  onChange={handleQuantityTypeOnSelectChange}
                  margin="normal"
                  label="quantity type"
                >
                  {quantityTypes.map(({id, name}) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid container justify="space-between">
              <Grid item xs={5} sm={3} md={2} lg={2} xl={3} className={classes.menuItem}>
                <TextField
                  name="recipeType"
                  select
                  value={selectedRecipeType}
                  onChange={handleRecipeTypeOnSelectChange}
                  label="recipe type"
                >
                  {recipeTypes.map(({id, name}) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={5} sm={3} md={2} lg={1} xl={1}>
                <TextField name="preparationTime" type="number" margin="normal" label="Preparation time" />
              </Grid>
            </Grid>
            <Grid item className={classes.button}>
              <CTAButton label="submit" type="submit" variant="contained">
                Submit
              </CTAButton>
            </Grid>
          </Form>
        </Paper>
      </Grid>
    </Page>
  )
}
// title={t('recipe.form.creation.label.field.title')}
// label={t('recipe.form.creation.label.field.name')}
// label={t('recipe.form.creation.label.field.instruction')}
// label={t('recipe.form.creation.label.field.preparationTime')}
// label={t('recipe.form.creation.label.field.recipeType')}
// menuItem {t(`recipe.form.creation.values.field.recipeType.${name}`)}

CreationForm.propTypes = {
  ...classesProps,
}

export default CreationForm
