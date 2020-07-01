import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {ONE} from 'common/constants/resources_type'
import {RECIPES} from 'common/constants/resources'
import Page from 'common/components/Page'

function Recipe() {
  const {t} = useTranslation()
  const {id} = useParams()
  const [recipeData, setRecipeData] = useState({ingredients: []})

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, ONE, id)

    // TODO adjust backend for a more elegant way to retrieve data
    callApi(url, GET)
      .then(({data}) => {
        setRecipeData(data[0])
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {recipeData.name && (
        <Page title={recipeData.name}>
          <div>
            {t('recipe.page.instruction')}: {recipeData.instruction}
          </div>
          <div>
            {t('recipe.page.preparationType')}: {recipeData.preparationTime}
          </div>
          <div>
            {t('recipe.page.type')}: {recipeData.type}
          </div>
          {t('recipe.page.ingredients')}
          {recipeData.ingredients.map(({id: key, name, description, quantity}) => {
            return (
              <div key={key}>
                <div>{name}</div>
                <div>{description}</div>
                <div>{quantity.value}</div>
                <div>{quantity.quantityType.name}</div>
              </div>
            )
          })}
        </Page>
      )}
    </div>
  )
}

export default Recipe
