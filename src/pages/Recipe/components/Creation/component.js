import React, {useEffect, useState} from 'react'

import {Button, Grid, Paper} from '@material-ui/core'
import {Field, Form} from 'react-final-form'
// import {get} from 'lodash'
import {TextField} from 'mui-rff'
import AddIcon from '@material-ui/icons/AddOutlined'
import AlarmIcon from '@material-ui/icons/Alarm'
import arrayMutators from 'final-form-arrays'

import {ALL, ONE, TYPES} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {classes as classesProps} from 'common/props'
import {GET, POST} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {INGREDIENTS, QUANTITY_TYPE, RECIPES} from 'common/constants/resources'
import CTAButton from 'common/components/CTAButton'
import getFormValuesFormated from './helper/dataHandler'
import IngredientFieldArray from './components/IngredientFieldArray'
import IngredientFields from './components/IngredientFields'
import Page from 'common/components/Page'

function CreationForm({classes, requiredFields, validateFields}) {
  // const {t} = useTranslation()
  const [list, setList] = useState({ingredients: [], recipeTypes: []})

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
    callApi(getEndpoint(RECIPES, POST, ONE), POST, getFormValuesFormated(values))
  }

  return (
    <Page title="test">
      <Grid container className={classes.root}>
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
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField name="name" margin="normal" required={requiredFields.name} label="name" autoFocus />
                  </Grid>
                  <Grid container spacing={2} className={classes.radioField}>
                    {list.recipeTypes.map(({name, id}) => {
                      // TODO implementer l' i18n dans le label
                      return (
                        <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                          <label key={id}>
                            <Field
                              name="recipeType"
                              label="Recipe Types"
                              component="input"
                              type="radio"
                              value={name}
                              // value={get(list, 'recipeTypes', [])}
                            />
                            {name}
                          </label>
                        </Grid>
                      )
                    })}
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={10} sm={6} md={4} lg={3} xl={4}>
                      <TextField name="preparationTime" type="number" label="preparation time (min)" className={classes.selectField} />
                    </Grid>
                    <Grid item xs={2} sm={1} md={1} lg={1} xl={1} className={classes.icon}>
                      <AlarmIcon />
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.instructionField}>
                    <TextField name="instruction" multiline required={requiredFields.instruction} label="instruction" />
                  </Grid>
                  <Grid className={classes.ingredientContainer}>
                    <IngredientFields name="requiredIngredients" items={list} displayButton={false} />
                    <IngredientFieldArray items={list} />
                  </Grid>
                  <Button onClick={() => push('ingredientFields', {id: list.length + 1})} color="main">
                    Add ingredient
                    <AddIcon fontSize="large" className={classes.border} />
                  </Button>
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
