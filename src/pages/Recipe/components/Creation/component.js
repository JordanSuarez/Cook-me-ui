import React, {useEffect, useState} from 'react'

import * as Yup from 'yup'
import {Grid, MenuItem, Paper} from '@material-ui/core'
import {makeRequired, makeValidate, Select, TextField} from 'mui-rff'

// import {useTranslation} from 'react-i18next'

import {ALL, ONE, TYPES} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET, POST} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {INGREDIENTS, QUANTITY_TYPE, RECIPES} from 'common/constants/resources'
import CTAButton from 'common/components/CTAButton'
import Form from 'common/components/Form'
import Page from 'common/components/Page'
import SelectField from 'common/components/SelectField'

import {classes as classesProps} from 'common/props'

function CreationForm({classes}) {
  // const {t} = useTranslation()

  const [list, setList] = useState({})

  useEffect(() => {
    const promises = [
      callApi(getEndpoint(INGREDIENTS, GET, ALL), GET),
      callApi(getEndpoint(QUANTITY_TYPE, GET, ALL), GET),
      callApi(getEndpoint(RECIPES, GET, TYPES), GET),
    ]

    Promise.all(promises)
      .then((values) => {
        setList({
          ingredients: values[0].data,
          quantityTypes: values[1].data,
          recipeTypes: values[0].data,
        })
        // setQuantityTypes(values[1].data)
        // setTypes(values[2].data)
      })
      .catch(() => {})
  }, [])

  const schema = Yup.object().shape({
    ingredient: Yup.number(),
    instruction: Yup.string().required(),
    name: Yup.string().required(),
    preparationTime: Yup.number(),
    quantityType: Yup.number(),
    quantityValue: Yup.number().required(),
    recipeType: Yup.number(),
  })

  // TODO give validate and required as props in index.js (with mapProps from recompose)
  const validate = makeValidate(schema)
  const required = makeRequired(schema)

  function onSubmit(values) {
    // TODO put this data logic inside a dataHandler.js inside (helpers) of this directory
    const data = {
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
      type: values.type,
    }

    callApi(getEndpoint(RECIPES, POST, ONE), POST, data)
  }

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
                {/* TODO create a select comp inside common with proper props*/}
                <SelectField name="ingredient" label="ingredient" items={list.ingredients} />
              </Grid>
              <Grid item xs={3} sm={2} md={2} lg={1} xl={1}>
                <TextField name="quantityValue" type="number" margin="normal" label="quantity" />
              </Grid>
              <Grid item xs={5} sm={3} md={2} lg={2} xl={3}>
                {/*<Select name="quantityType" label="quantity type">*/}
                {/*  {quantityTypes.map(({id, name}) => (*/}
                {/*    <MenuItem key={id} value={id}>*/}
                {/*      {name}*/}
                {/*    </MenuItem>*/}
                {/*  ))}*/}
                {/*</Select>*/}
              </Grid>
            </Grid>
            <Grid container justify="space-between">
              <Grid item xs={5} sm={3} md={2} lg={2} xl={3} className={classes.menuItem}>
                {/*<SelectField name="type" label="recipe type" items={types} />*/}
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
