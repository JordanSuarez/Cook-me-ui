import React, {useEffect, useState} from 'react'

import {Form} from 'react-final-form'
import {get} from 'lodash'
import {Grid, Paper} from '@material-ui/core'
import {TextField} from 'mui-rff'
import AddIcon from '@material-ui/icons/AddOutlined'
import arrayMutators from 'final-form-arrays'

import {ALL, ONE, TYPES} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {classes as classesProps} from 'common/props'
import {GET, POST} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {INGREDIENTS, QUANTITY_TYPE, RECIPES} from 'common/constants/resources'
import CTAButton from 'common/components/CTAButton'
import getFormValuesFormated from './helper/dataHandler'
import IconButton from 'common/components/IconButton'
import IngredientFieldArray from './components/IngredientFieldArray'
import IngredientFields from './components/IngredientFields'
import Page from 'common/components/Page'
import SelectField from 'common/components/SelectField'

function CreationForm({classes, requiredFields, validateFields}) {
  // const {t} = useTranslation()
  const [list, setList] = useState({ingredients: []})

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
    console.log(values)
    callApi(getEndpoint(RECIPES, POST, ONE), POST, getFormValuesFormated(values))
  }

  return (
    <Page title="test">
      <Grid container spacing={0} className={classes.root}>
        <Paper className={classes.paper}>
          <Form
            onSubmit={onSubmit}
            validate={validateFields}
            autoComplete="off"
            mutators={{
              ...arrayMutators,
            }}
            render={({
              handleSubmit,
              form: {
                mutators: {push},
              },
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                      <TextField name="name" margin="normal" required={requiredFields.name} label="name" autoFocus />
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                      <TextField name="preparationTime" type="number" margin="normal" label="time" />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField name="instruction" multiline margin="normal" required={requiredFields.instruction} label="instruction" />
                  </Grid>
                  <Grid item>
                    <IngredientFields name="requiredIngredients" items={list} displayButton={false} />
                    <IngredientFieldArray items={list} />
                    <Grid container justify="space-between">
                      <Grid item xs={10} sm={4} md={4} lg={4} xl={4}>
                        <SelectField name="recipeType" label="recipe types" items={get(list, 'recipeTypes', [])} />
                      </Grid>
                      <Grid item xs={2} sm={1} md={1} lg={1} xl={1} className={classes.button}>
                        <IconButton onClick={() => push('ingredientFields', {id: list.length + 1})} color="primary" title="add ingredient">
                          <AddIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container justify="flex-end">
                    <CTAButton label="submit" type="submit" variant="contained" />
                  </Grid>
                </form>
              )
            }}
          />
        </Paper>
      </Grid>
    </Page>
  )
}

CreationForm.propTypes = {
  ...classesProps,
}

export default CreationForm
