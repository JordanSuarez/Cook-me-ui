import React, {useEffect, useState} from 'react'

import {get} from 'lodash'
import {Grid, IconButton, Paper, Tooltip} from '@material-ui/core'
import {TextField} from 'mui-rff'

// import {useTranslation} from 'react-i18next'
import CreateNewIngredient from '@material-ui/icons/AddOutlined'

import {ALL, ONE, TYPES} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {classes as classesProps} from 'common/props'
import {GET, POST} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {INGREDIENTS, QUANTITY_TYPE, RECIPES} from 'common/constants/resources'
import CTAButton from 'common/components/CTAButton'
import Form from 'common/components/Form'
import getFormValueFormated from './helper/dataHandler'
import Page from 'common/components/Page'
import SelectField from 'common/components/SelectField'

function CreationForm({classes, requiredFields, validateFields}) {
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
        // TODO adjust backend to retrieve data with a more elegant way
        setList({
          ingredients: values[0].data,
          quantityTypes: values[1].data,
          recipeTypes: values[2].data,
        })
      })
      .catch(() => {})
  }, [])

  function onSubmit(values) {
    callApi(getEndpoint(RECIPES, POST, ONE), POST, getFormValueFormated(values))
  }

  function handleNewIngredient() {}

  return (
    <Page title="test">
      <Grid container spacing={0} className={classes.root}>
        <Paper className={classes.paper}>
          <Form validate={validateFields} onSubmit={onSubmit} autoComplete="off">
            <Grid item xs={7}>
              <TextField name="name" margin="normal" required={requiredFields.name} label="name" autoFocus />
            </Grid>
            <Grid item xs={12} sm={11} md={10} lg={9} xl={8}>
              <TextField name="instruction" multiline margin="normal" required={requiredFields.instruction} label="instruction" />
            </Grid>
            <Grid container justify="space-between" spacing={4}>
              <Grid item xs={8} sm={7} md={6} lg={5} xl={4}>
                <SelectField name="ingredient" label="ingredients" items={get(list, 'ingredients', [])} />
              </Grid>
              <Grid>
                <Tooltip title="Add an ingredient">
                  <IconButton onClick={handleNewIngredient} className={classes.button}>
                    <CreateNewIngredient fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
            <Grid container justify="flex-start" spacing={2} className={classes.quantity}>
              <Grid item xs={7} sm={6} md={5} lg={4} xl={3}>
                <SelectField name="quantityType" label="quantity types" items={get(list, 'quantityTypes', [])} />
              </Grid>
              <Grid item xs={4} sm={3} md={2} lg={2} xl={3} className={classes.alignField}>
                <TextField name="quantityValue" type="number" margin="normal" label="quantity" />
              </Grid>
            </Grid>
            <Grid container justify="flex-start" spacing={2}>
              <Grid item xs={7} sm={6} md={5} lg={4} xl={3}>
                <SelectField name="recipeType" label="recipe types" items={get(list, 'recipeTypes', [])} />
              </Grid>
              <Grid item xs={4} sm={3} md={2} lg={1} xl={1} className={classes.alignField}>
                <TextField name="preparationTime" type="number" margin="normal" label="time" />
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
