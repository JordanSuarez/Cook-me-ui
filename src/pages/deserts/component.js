import React, {useEffect, useState} from 'react'

import {useTranslation} from 'react-i18next'

import {BY_RECIPE_TYPE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import List from 'common/components/list'
import Page from 'common/components/page'

function Deserts() {
  const [recipes, setRecipes] = useState([])
  const {t} = useTranslation()

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, BY_RECIPE_TYPE, 11)

    callApi(url, GET)
      .then(({data}) => {
        setRecipes(data)
      })
      .catch(() => {})
  }, [])

  return (
    <Page title={t('deserts.title')}>
      <List items={recipes} />
    </Page>
  )
}

export default Deserts
