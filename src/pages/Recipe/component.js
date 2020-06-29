import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'

import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {ONE} from 'common/constants/resources_type'
import {RECIPES} from 'common/constants/resources'
import Page from 'common/components/Page'

function Recipe() {
  const {id} = useParams()
  const [recipeData, setRecipeData] = useState([{}])
  const [displayData, setDisplayData] = useState(false)

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, ONE, id)

    callApi(url, GET)
      .then(({data}) => {
        setRecipeData(data[0])
        setDisplayData(true)
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {displayData && (
        <Page title={recipeData.name}>
          <div>instruction: {recipeData.instruction}</div>
          <div>temps de preparation: {recipeData.preparationTime}</div>
          <div>type: {recipeData.type}</div>
          Ingredients:
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
