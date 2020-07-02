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
            <h3>{t('recipe.page.instruction')}</h3>
            <p dangerouslySetInnerHTML={{__html: `${recipeData.instruction}`}} />
          </div>
          <div>
            <h3>{t('recipe.page.preparationType')}:</h3>
            <p>{recipeData.preparationTime}</p>
          </div>
          <div>
            <h3>{t('recipe.page.type')}</h3>
            <p>{recipeData.type}</p>
          </div>
          <div>
            <h3>{t('recipe.page.ingredients')}</h3>
            {recipeData.ingredients.map(({id: key, name, description, quantity}) => {
              return (
                <ul key={key}>
                  <li>{name}</li>
                  <li>{`${quantity.value} ${quantity.quantityType.name}`}</li>
                  <li>{description}</li>
                </ul>
              )
            })}
          </div>
        </Page>
      )}
    </div>
  )
}

export default Recipe
