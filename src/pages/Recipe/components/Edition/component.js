import React, {useEffect, useState} from 'react'

import {Button, Grid, InputAdornment, Paper} from '@material-ui/core'
import {find, get} from 'lodash'
import {Form} from 'react-final-form'
import {Radios, TextField} from 'mui-rff'
import {useHistory, useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import AddIcon from '@material-ui/icons/AddOutlined'
import AlarmIcon from '@material-ui/icons/Alarm'
import arrayMutators from 'final-form-arrays'

import {ALL, ONE, TYPES} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {classes as classesProps} from 'common/props'
import {GET, PUT} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {getShowRecipeRoute} from 'common/routing/routesResolver'
import {INGREDIENTS, QUANTITY_TYPE, RECIPES, RECIPES_TYPE} from 'common/constants/resources'
import CTAButton from 'common/components/CTAButton'
import getFormValuesFormated from '../helper/dataHandler'
import IngredientFieldArray from 'common/components/Ingredient/IngredientFieldArray'
import IngredientFields from 'common/components/Ingredient/IngredientFields'
import Page from 'common/components/Page'
import WysiwygEditor from 'common/components/WysiwygEditor'

function EditForm({classes, validateFields}) {
  const {t} = useTranslation()
  const {id} = useParams()
  const history = useHistory()
  const [recipeData, setRecipeData] = useState({ingredients: []})
  const [loadData, setLoadData] = useState(false)
  const [list, setList] = useState({ingredients: [], recipeTypes: []})

  const findByResource = (values, resource) => find(values, (value) => value.config.url === `/${resource}`)

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, ONE, id)
    const promises = [
      callApi(getEndpoint(INGREDIENTS, GET, ALL), GET),
      callApi(getEndpoint(QUANTITY_TYPE, GET, ALL), GET),
      callApi(getEndpoint(RECIPES, GET, TYPES), GET),
    ]

    callApi(url, GET)
      .then(({data}) => {
        setRecipeData(data)
      })
      .then(
        Promise.all(promises).then((values) => {
          setList({
            ingredients: get(findByResource(values, INGREDIENTS), 'data'),
            quantityTypes: get(findByResource(values, QUANTITY_TYPE), 'data'),
            recipeTypes: get(findByResource(values, RECIPES_TYPE), 'data'),
          })
          setLoadData(true)
        }),
      )
      .catch(() => {})
  }, [])

  const onSubmit = (values) => {
    if (!get(values, 'requiredIngredients')) {
      return false
    }

    return callApi(getEndpoint(RECIPES, PUT, ONE, id), PUT, getFormValuesFormated(values))
      .then(({data}) => history.push(getShowRecipeRoute(data.id)))
      .catch(() => {})
  }

  const ingredients = recipeData.ingredients.map((ingredient) => {
    return {
      id: ingredient.id,
      ingredient: ingredient.id,
      quantityType: get(ingredient, 'quantity.quantityType.id'),
      quantityValue: get(ingredient, 'quantity.value'),
    }
  })

  const initialValues = {
    name: recipeData.name,
    recipeType: recipeData.type,
    preparationTime: recipeData.preparationTime,
    instruction: recipeData.instruction,
    ingredientFields: ingredients.slice(1, ingredients.length),
    requiredIngredients: ingredients[0],
  }

  // Field error messages
  const errorFields = {
    name: {
      required: t('recipe.page.update.error.name.required'),
    },
    preparationTime: {
      required: t('recipe.page.update.error.preparationTime.required'),
      typeError: t('recipe.page.update.error.preparationTime.typeError'),
    },
  }

  return (
    <div>
      {loadData && (
        <Page title={t('recipe.page.update.title')}>
          <Grid container className={classes.root}>
            <Paper className={classes.paper}>
              <Form
                onSubmit={onSubmit}
                validate={validateFields(errorFields)}
                initialValues={initialValues}
                autoComplete="off"
                mutators={{
                  ...arrayMutators,
                }}
                render={({
                  handleSubmit,
                  form: {
                    mutators: {push},
                  },
                  submitting,
                  pristine,
                  valid,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <TextField name="name" margin="normal" label={t('recipe.page.create.label.name')} autoFocus />
                    </Grid>
                    <Grid container spacing={1} className={classes.radioField}>
                      {/* eslint-disable-next-line no-shadow */}
                      {list.recipeTypes.map(({name, id}) => {
                        return (
                          <Grid item key={id} xs={12} sm={2} md={2} lg={2} xl={2}>
                            <Radios
                              key={id}
                              color="primary"
                              name="recipeType"
                              type="radio"
                              value={id}
                              checked={recipeData.type === id}
                              onClick={(event) => {
                                setRecipeData({...recipeData, type: parseInt(event.target.value, 10)})
                              }}
                              required
                              data={[{label: `${name}`, value: `${id}`}]}
                            />
                          </Grid>
                        )
                      })}
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={10} sm={6} md={4} lg={3} xl={4}>
                        <TextField
                          name="preparationTime"
                          type="number"
                          label={t('recipe.page.update.label.preparationTime')}
                          InputProps={{
                            endAdornment: <InputAdornment position="end">{t('recipe.page.update.preparationTime')}</InputAdornment>,
                          }}
                          className={classes.selectField}
                        />
                      </Grid>
                      <Grid item xs={2} sm={1} md={1} lg={1} xl={1} className={classes.timerIcon}>
                        <AlarmIcon />
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.instructionField}>
                      <WysiwygEditor theme="snow" name="instruction" placeholder={t('recipe.page.update.label.instruction')} />
                    </Grid>
                    <Grid className={classes.ingredientContainer}>
                      <IngredientFields name="requiredIngredients" items={list} displayButton={false} />
                      <IngredientFieldArray items={list} />
                    </Grid>
                    <Grid item className={classes.submitButton}>
                      <Button onClick={() => push('ingredientFields', {id: list.length + 1})} className={classes.buttonLabel}>
                        <span className={classes.buttonLabel}>{t('recipe.page.update.addIngredient')}</span>
                        <AddIcon fontSize="large" className={classes.buttonBorder} />
                      </Button>
                    </Grid>
                    <Grid item className={classes.ctaButton}>
                      <CTAButton label={t('recipe.page.update.submitButton')} type="submit" disabled={submitting || pristine || !valid} />
                    </Grid>
                  </form>
                )}
              />
            </Paper>
          </Grid>
        </Page>
      )}
    </div>
  )
}

EditForm.propTypes = {
  ...classesProps,
}

export default EditForm
