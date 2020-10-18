import React, {useEffect, useState} from 'react'

import {Button, Grid, InputAdornment, Paper} from '@material-ui/core'
import {Form} from 'react-final-form'
import {get} from 'lodash'
import {Radios, TextField} from 'mui-rff'
import {useParams} from 'react-router-dom'
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

function EditForm({classes, validateFields}) {
  const {id} = useParams()
  const [recipeData, setRecipeData] = useState({ingredients: []})
  const [loadData, setLoadData] = useState(false)
  const [list, setList] = useState({ingredients: [], recipeTypes: []})
  const [recipeName, setRecipeName] = useState('')
  const [preparationTime, setPreparationTime] = useState('')
  const [instruction, setInstruction] = useState('')

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, ONE, id)
    const promises = [
      callApi(getEndpoint(INGREDIENTS, GET, ALL), GET),
      callApi(getEndpoint(QUANTITY_TYPE, GET, ALL), GET),
      callApi(getEndpoint(RECIPES, GET, TYPES), GET),
    ]

    // TODO adjust backend for a more elegant way to retrieve data
    callApi(url, GET)
      .then(({data}) => {
        setRecipeData(data)
        setRecipeName(data.name)
        setPreparationTime(data.preparationTime)
        setInstruction(data.instruction)
        setLoadData(true)
      })
      .then(
        Promise.all(promises).then((values) => {
          // TODO adjust backend to retrieve data with a more elegant way
          setList({
            ingredients: values[0].data,
            quantityTypes: values[1].data,
            recipeTypes: values[2].data,
          })
        }),
      )
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  function onSubmit(values) {
    console.log(values)
    if (!get(values, 'requiredIngredients')) {
      return false
    }

    return callApi(getEndpoint(RECIPES, POST, ONE), POST, getFormValuesFormated(values))
  }

  // const handleChangeIngredient = (event) => {
  //   return this.setState(event.target.value)
  // }

  function handleChangeRecipeName(event) {
    return setRecipeName(event.target.value)
  }

  function handleChangePreparationTime(event) {
    return setPreparationTime(event.target.value)
  }

  function handleChangeInstruction(content) {
    // content is props of react-quill
    setInstruction(content)
  }

  // TODO add key trad
  return (
    <div>
      {loadData && (
        <Page title={recipeName}>
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
                        <TextField
                          name="name"
                          margin="normal"
                          label="name"
                          autoFocus
                          value={recipeName}
                          onChange={handleChangeRecipeName}
                        />
                      </Grid>
                      <Grid container spacing={1} className={classes.radioField}>
                        {/* eslint-disable-next-line no-shadow */}
                        {list.recipeTypes.map(({name, id}) => {
                          return (
                            <Grid item key={id} xs={12} sm={2} md={2} lg={2} xl={2}>
                              <Radios
                                key={id}
                                color="primary"
                                name="type"
                                checked={recipeData.type === id}
                                value={recipeData.type === id}
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
                            label="Preparation time"
                            InputProps={{
                              endAdornment: <InputAdornment position="end">Minutes</InputAdornment>,
                            }}
                            className={classes.selectField}
                            value={preparationTime}
                            onChange={handleChangePreparationTime}
                          />
                        </Grid>
                        <Grid item xs={2} sm={1} md={1} lg={1} xl={1} className={classes.timerIcon}>
                          <AlarmIcon />
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.instructionField}>
                        <WysiwygEditor theme="snow" name="instruction" value={instruction} onChange={handleChangeInstruction} />
                      </Grid>
                      <Grid className={classes.ingredientContainer}>
                        {/*{recipeData.ingredients.map((ingredient) => {*/}
                        {/*  console.log(ingredient.name)*/}
                        {/*  console.log(recipeData)*/}

                        {/*return (*/}
                        <IngredientFields
                          // key={ingredient.id}
                          name="requiredIngredients"
                          items={list}
                          displayButton
                        />
                        {/*  )*/}
                        {/*})}*/}
                        {/*<IngredientFields name="requiredIngredients" items={list} displayButton={true} />*/}
                        <IngredientFieldArray items={list} />
                      </Grid>
                      <Grid item className={classes.submitButton}>
                        <Button onClick={() => push('ingredientFields', {id: list.length + 1})} className={classes.buttonLabel}>
                          <span className={classes.buttonLabel}>Add ingredient</span>
                          <AddIcon fontSize="large" className={classes.buttonBorder} />
                        </Button>
                      </Grid>
                      <Grid item className={classes.ctaButton}>
                        <CTAButton label="Recipe creation" type="submit" />
                      </Grid>
                    </form>
                  )
                }}
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
