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
import getFormValueFormated from './helper/dataHandler'
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
    callApi(getEndpoint(RECIPES, POST, ONE), POST, getFormValueFormated(values))
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
                  <Grid item xs={7}>
                    <TextField name="name" margin="normal" required={requiredFields.name} label="name" autoFocus />
                  </Grid>
                  <Grid item xs={12} sm={11} md={10} lg={9} xl={8}>
                    <TextField name="instruction" multiline margin="normal" required={requiredFields.instruction} label="instruction" />
                  </Grid>
                  <Grid container justify="flex-start" spacing={2}>
                    <Grid item xs={7} sm={6} md={5} lg={4} xl={3}>
                      <SelectField name="recipeType" label="recipe types" items={get(list, 'recipeTypes', [])} />
                    </Grid>
                    <Grid item xs={4} sm={3} md={2} lg={1} xl={1} className={classes.alignField}>
                      <TextField name="preparationTime" type="number" margin="normal" label="time" />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <IngredientFields items={list} displayButton={false} />
                    <IngredientFieldArray items={list} />
                    <Grid container justify="flex-end">
                      <IconButton
                        variant="contained"
                        onClick={() => push('ingredient', undefined)}
                        size="small"
                        color="primary"
                        title="add ingredient"
                      >
                        <AddIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Grid container justify="flex-end">
                    <CTAButton label="submit" type="submit" variant="contained">
                      Submit
                    </CTAButton>
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
