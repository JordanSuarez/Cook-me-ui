import React, {useEffect, useState} from 'react'

import {Button, Grid, InputAdornment, Paper} from '@material-ui/core'
import {Form} from 'react-final-form'
import {get} from 'lodash'
import {number, string} from 'prop-types'
import {Radios, TextField} from 'mui-rff'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import AddIcon from '@material-ui/icons/AddOutlined'
import AlarmIcon from '@material-ui/icons/Alarm'
import arrayMutators from 'final-form-arrays'

import {ALL, ONE, TYPES} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {classes as classesProps} from 'common/props'
import {GET, POST, PUT} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {getFormattedFormValues, recipeElements} from './helper/dataHandler'
import {getShowRecipeRoute} from 'common/routing/routesResolver'
import {INGREDIENTS, QUANTITY_TYPE, RECIPES} from 'common/constants/resources'
import CTAButton from 'common/components/CTAButton'
import IngredientFieldArray from 'common/components/Ingredient/IngredientFieldArray'
import IngredientFields from 'common/components/Ingredient/IngredientFields'
import Page from 'common/components/Page'
import WysiwygEditor from 'common/components/WysiwygEditor'

function RecipeForm({classes, validateFields, context, recipeId}) {
  const {t} = useTranslation()
  const history = useHistory()
  const [loaded, setLoaded] = useState(context === POST)
  const [recipeData, setRecipeData] = useState({})
  const [list, setList] = useState({ingredients: [], recipeTypes: []})

  useEffect(() => {
    const promises = [
      callApi(getEndpoint(INGREDIENTS, GET, ALL), GET),
      callApi(getEndpoint(QUANTITY_TYPE, GET, ALL), GET),
      callApi(getEndpoint(RECIPES, GET, TYPES), GET),
    ]

    if (context === PUT) {
      const url = getEndpoint(RECIPES, GET, ONE, recipeId)

      callApi(url, GET)
        .then(({data}) => {
          const ingredients = data.ingredients.map((ingredient) => {
            return {
              id: ingredient.id,
              ingredient: ingredient.id,
              quantityType: get(ingredient, 'quantity.quantityType.id'),
              quantityValue: get(ingredient, 'quantity.value'),
            }
          })

          const initialValues = {
            id: data.id,
            name: data.name,
            recipeType: data.type,
            preparationTime: data.preparationTime,
            instruction: data.instruction,
            ingredientFields: ingredients.slice(1, ingredients.length),
            requiredIngredients: ingredients[0],
          }

          setRecipeData(initialValues)
        })
        .then(
          Promise.all(promises).then((values) => {
            setList(recipeElements(values))
            setLoaded(true)
          }),
        )
        .catch(() => {})
    } else {
      Promise.all(promises)
        .then((values) => {
          setList(recipeElements(values))
        })
        .catch(() => {})
    }
  }, [context, recipeId])

  const onSubmit = (values) => {
    if (!get(values, 'requiredIngredients')) {
      return false
    }

    return context === PUT
      ? callApi(getEndpoint(RECIPES, PUT, ONE, recipeId), PUT, getFormattedFormValues(values))
          .then(({data}) => history.push(getShowRecipeRoute(data.id)))
          .catch(() => {})
      : callApi(getEndpoint(RECIPES, POST, ONE), POST, getFormattedFormValues(values))
          .then(({data}) => history.push(getShowRecipeRoute(data.id)))
          .catch(() => {})
  }

  // Field error messages
  const errorFields = {
    name: {
      required: t('recipe.page.form.error.field.name.required'),
    },
    preparationTime: {
      required: t('recipe.page.form.error.field.preparationTime.required'),
      typeError: t('recipe.page.form.error.field.preparationTime.typeError'),
    },
  }

  // Key trad for recipe type radio label
  const recipeType = {
    starters: t('recipe.page.form.label.field.recipeType.starters'),
    dish: t('recipe.page.form.label.field.recipeType.dish'),
    deserts: t('recipe.page.form.label.field.recipeType.deserts'),
  }

  return (
    <div>
      {loaded && (
        <Page title={context === PUT ? t('recipe.page.form.title.update') : t('recipe.page.form.title.create')}>
          <Grid container className={classes.root}>
            <Paper className={classes.paper}>
              <Form
                onSubmit={onSubmit}
                validate={validateFields(errorFields)}
                initialValues={context === PUT ? recipeData : {}}
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
                  values,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <TextField name="name" margin="normal" label={t('recipe.page.form.label.field.name')} />
                    </Grid>
                    <Grid container spacing={1} className={classes.radioField}>
                      {list.recipeTypes.map(({name, id}) => {
                        return (
                          <Grid item key={id} xs={12} sm={2} md={2} lg={2} xl={2}>
                            {context === PUT ? (
                              <Radios
                                key={id}
                                color="primary"
                                name="recipeType"
                                required
                                data={[
                                  {
                                    label: recipeType[name],
                                    value: `${id}`,
                                  },
                                ]}
                                type="radio"
                                value={id}
                                checked={recipeData.recipeType === id}
                                onClick={(event) => {
                                  // Saving form values because setter re-render the component and resetting form state
                                  setRecipeData({
                                    ...values,
                                    recipeType: parseInt(event.target.value, 10),
                                  })
                                }}
                              />
                            ) : (
                              <Radios
                                key={id}
                                color="primary"
                                name="recipeType"
                                required
                                data={[
                                  {
                                    label: recipeType[name],
                                    value: `${id}`,
                                  },
                                ]}
                                type="radio"
                              />
                            )}
                          </Grid>
                        )
                      })}
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={10} sm={6} md={4} lg={3} xl={4}>
                        <TextField
                          name="preparationTime"
                          type="number"
                          label={t('recipe.page.form.label.field.preparationTime')}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">{t('recipe.page.form.label.icon.preparationTime')}</InputAdornment>
                            ),
                          }}
                          className={classes.selectField}
                        />
                      </Grid>
                      <Grid item xs={2} sm={1} md={1} lg={1} xl={1} className={classes.timerIcon}>
                        <AlarmIcon />
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.instructionField}>
                      <WysiwygEditor theme="snow" name="instruction" placeholder={t('recipe.page.form.label.field.instruction')} />
                    </Grid>
                    <Grid className={classes.ingredientContainer}>
                      <IngredientFields name="requiredIngredients" items={list} displayButton={false} />
                      <IngredientFieldArray items={list} />
                    </Grid>
                    <Grid item className={classes.submitButton}>
                      <Button onClick={() => push('ingredientFields', {id: list.length + 1})} className={classes.buttonLabel}>
                        <span className={classes.buttonLabel}>{t('recipe.page.form.label.button.addIngredient')}</span>
                        <AddIcon fontSize="large" className={classes.buttonBorder} />
                      </Button>
                    </Grid>
                    <Grid item className={classes.ctaButton}>
                      <CTAButton
                        label={t('recipe.page.form.label.button.submitButton')}
                        type="submit"
                        disabled={submitting || pristine || !valid}
                      />
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

RecipeForm.propTypes = {
  context: string.isRequired,
  recipeId: number,
  ...classesProps,
}

RecipeForm.defaultProps = {
  recipeId: null,
}

export default RecipeForm