import React, {useEffect, useState} from 'react'

import {Button, Grid, InputAdornment, Paper} from '@material-ui/core'
import {find, get} from 'lodash'
import {Form} from 'react-final-form'
import {Radios, TextField} from 'mui-rff'
import {useTranslation} from 'react-i18next'
import AddIcon from '@material-ui/icons/AddOutlined'
import AlarmIcon from '@material-ui/icons/Alarm'
import arrayMutators from 'final-form-arrays'

import {ALL, ONE, TYPES} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {classes as classesProps} from 'common/props'
import {GET, POST} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {INGREDIENTS, QUANTITY_TYPE, RECIPES, RECIPES_TYPE} from 'common/constants/resources'
import CTAButton from 'common/components/CTAButton'
import getFormValuesFormated from '../helper/dataHandler'
import IngredientFieldArray from 'common/components/Ingredient/IngredientFieldArray'
import IngredientFields from 'common/components/Ingredient/IngredientFields'
import Page from 'common/components/Page'
import WysiwygEditor from 'common/components/WysiwygEditor'

function CreationForm({classes, validateFields}) {
  const {t} = useTranslation()
  const [list, setList] = useState({ingredients: [], recipeTypes: []})

  const findByResource = (values, resource) => find(values, (value) => value.config.url === `/${resource}`)

  useEffect(() => {
    const promises = [
      callApi(getEndpoint(INGREDIENTS, GET, ALL), GET),
      callApi(getEndpoint(QUANTITY_TYPE, GET, ALL), GET),
      callApi(getEndpoint(RECIPES, GET, TYPES), GET),
    ]

    Promise.all(promises)
      .then((values) => {
        setList({
          ingredients: get(findByResource(values, INGREDIENTS), 'data'),
          quantityTypes: get(findByResource(values, QUANTITY_TYPE), 'data'),
          recipeTypes: get(findByResource(values, RECIPES_TYPE), 'data'),
        })
      })
      .catch(() => {})
  }, [])

  function onSubmit(values) {
    if (!get(values, 'requiredIngredients')) {
      return false
    }

    return callApi(getEndpoint(RECIPES, POST, ONE), POST, getFormValuesFormated(values))
  }

  return (
    <Page title={t('recipe.page.form.title.create')}>
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
                    <TextField name="name" margin="normal" label={t('recipe.page.form.label.field.name')} autoFocus />
                  </Grid>
                  <Grid container spacing={1} className={classes.radioField}>
                    {list.recipeTypes.map(({name, id}) => (
                      <Grid item key={id} xs={12} sm={2} md={2} lg={2} xl={2}>
                        <Radios key={id} color="primary" name="recipeType" required data={[{label: `${name}`, value: `${id}`}]} />
                      </Grid>
                    ))}
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={10} sm={6} md={4} lg={3} xl={4}>
                      <TextField
                        name="preparationTime"
                        type="number"
                        label={t('recipe.page.form.label.field.preparationTime')}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">{t('recipe.page.form.label.icon.preparationTime')}</InputAdornment>,
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
                    <CTAButton label={t('recipe.page.form.label.button.submitButton')} type="submit" />
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
