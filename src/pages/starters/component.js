import React, {useEffect, useState} from 'react'

import {BY_RECIPE_TYPE} from '../../common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from '../../common/helpers/urlHandler'
import {RECIPES} from '../../common/constants/resources'
import List from 'common/components/list'
import Page from 'common/components/page'

function Starters() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, BY_RECIPE_TYPE, 61)

    callApi(url, GET)
      .then(({data}) => {
        setRecipes(data)
      })
      .catch(() => {})
  }, [])

  return (
    <Page title="Starters list">
      <List items={recipes} />
    </Page>
  )
}

export default Starters
