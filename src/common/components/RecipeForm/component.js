import React, {useContext, useEffect, useState} from 'react'

import {Button, Grid, InputAdornment, Paper} from '@material-ui/core'
import {Form} from 'react-final-form'
import {get, merge} from 'lodash'
import {number} from 'prop-types'
import {Radios, TextField} from 'mui-rff'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import AddIcon from '@material-ui/icons/AddOutlined'
import AlarmIcon from '@material-ui/icons/Alarm'
import arrayMutators from 'final-form-arrays'

import {callApi} from 'common/helpers/repository'
import {classes as classesProps} from 'common/props'
import {CREATE, UPDATE} from 'common/constants/context'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {getShowRecipeRoute} from 'common/routing/routesResolver'
import {handleFetchRequest, handleSubmitRequest} from './helper/apiHandler'
import {ONE} from 'common/constants/resources_type'
import {recipeElements} from './helper/dataHandler'
import {RecipeFormContext} from 'common/context/RecipeFormContext'
import {RECIPES} from 'common/constants/resources'
import CTAButton from 'common/components/CTAButton'
import fieldErrorMessages from './helper/fieldErrorMessages'
import IngredientFieldArray from 'common/components/Ingredient/IngredientFieldArray'
import IngredientFields from 'common/components/Ingredient/IngredientFields'
import initialValues from './helper/initialValues'
import Page from 'common/components/Page'
import recipeType from 'common/helpers/recipeType'
import WysiwygEditor from 'common/components/WysiwygEditor'

function RecipeForm({classes, validateFields, recipeId}) {
  const context = useContext(RecipeFormContext)
  const {t} = useTranslation()
  const history = useHistory()
  const [loaded, setLoaded] = useState(context === CREATE)
  const [recipeData, setRecipeData] = useState({})
  const [list, setList] = useState({ingredients: [], recipeTypes: []})

  useEffect(() => {
    if (context === UPDATE) {
      const url = getEndpoint(RECIPES, GET, ONE, recipeId)

      callApi(url, GET).then(({data}) => {
        setRecipeData(initialValues(data))
      })
    }

    handleFetchRequest().then((values) => {
      setList(recipeElements(values))
      setLoaded(true)
    })
  }, [context, recipeId])

  const onSubmit = (values) => {
    if (!get(values, 'requiredIngredients')) {
      return false
    }

    return handleSubmitRequest(context, recipeId, values).then(({data}) => history.push(getShowRecipeRoute(data.id)))
  }

  return (
    <div>
      {loaded && (
        <Page title={context === UPDATE ? t('recipe.page.form.title.update') : t('recipe.page.form.title.create')}>
          <Grid container className={classes.root}>
            <Paper className={classes.paper}>
              <Form
                onSubmit={onSubmit}
                validate={validateFields(fieldErrorMessages(t))}
                initialValues={merge(recipeData, initialValues({}))}
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
                            {context === UPDATE ? (
                              <Radios
                                key={id}
                                color="primary"
                                name="recipeType"
                                required
                                data={[
                                  {
                                    label: recipeType(t)[name],
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
                                    label: recipeType(t)[name],
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
                      <Grid item xs={11} sm={6} md={4} lg={4} xl={4}>
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
                      <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={classes.timerIcon}>
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
                      <CTAButton label={t('recipe.page.form.label.button.submitButton')} type="submit" disabled={submitting || !valid} />
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
  recipeId: number,
  ...classesProps,
}

RecipeForm.defaultProps = {
  recipeId: null,
}

export default RecipeForm
