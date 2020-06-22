import React, {useEffect, useState} from 'react'

import {Button, Grid, InputAdornment, Paper} from '@material-ui/core'
import {Form} from 'react-final-form'
import {get} from 'lodash'
import {Radios, TextField} from 'mui-rff'
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
import WysiwygEditor from 'common/components/WysiwygEditor'

function CreationForm({classes, validateFields}) {
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
    if (!get(values, 'ingredientFields')) {
      return false
    }

    return callApi(getEndpoint(RECIPES, POST, ONE), POST, getFormValuesFormated(values))
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
                    <TextField name="name" margin="normal" label="name" autoFocus />
                  </Grid>
                  <Grid container spacing={1} className={classes.radioField}>
                    {list.recipeTypes.map(({name, id}) => {
                      return (
                        <Grid item key={id} xs={12} sm={2} md={2} lg={2} xl={2}>
                          <Radios key={id} color="primary" name="recipeType" required data={[{label: `${name}`, value: `${id}`}]} />
                        </Grid>
                      )
                    })}
                    {/*{t(`recipe.form.creation.values.field.recipeType.${name}`)}*/}
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={10} sm={6} md={4} lg={3} xl={4}>
                      <TextField
                        name="preparationTime"
                        type="number"
                        label="Preparation time"
                        InputProps={{
                          endAdornment: <InputAdornment position="end">Minutes</InputAdornment>,
                        }}
                        className={classes.selectField}
                      />
                    </Grid>
                    <Grid item xs={2} sm={1} md={1} lg={1} xl={1} className={classes.timerIcon}>
                      <AlarmIcon />
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.instructionField}>
                    <WysiwygEditor theme="snow" name="instruction" />
                  </Grid>
                  <Grid className={classes.ingredientContainer}>
                    <IngredientFields name="requiredIngredients" items={list} displayButton={false} />
                    <IngredientFieldArray items={list} />
                  </Grid>
                  <Grid container justify="space-between" className={classes.footer}>
                    <Grid item>
                      <Button onClick={() => push('ingredientFields', {id: list.length + 1})} className={classes.buttonLabel}>
                        <span className={classes.buttonLabel}>Add ingredient</span>
                        <AddIcon fontSize="large" className={classes.border} />
                      </Button>
                    </Grid>
                    <Grid item>
                      <CTAButton label="Recipe creation" type="submit" />
                    </Grid>
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
