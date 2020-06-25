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
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, ONE, id)

    callApi(url, GET)
      .then(({data}) => {
        setRecipe(data)
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Page title={recipe.name}>
        <div>{recipe.instruction}</div>
        <div>{recipe.preparationTime}</div>
        <div>{recipe.type}</div>
      </Page>
    </div>
  )
}

export default Recipe
