import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {any, objectOf} from 'prop-types'

import {BY_TYPE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import formatList from 'common/helpers/formatListForSearch'
import getColumns from 'common/helpers/columns'
import ListWrapper from 'common/components/ListWrapper'
import Page from 'common/components/Page'

function Dish() {
  const {t} = useTranslation()
  const {id} = useParams()
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, BY_TYPE, id)

    callApi(url, GET)
      .then(({data}) => {
        setRecipes(data.map((recipe) => formatList(recipe)))
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  return <Page title={t('dishPage.title')}>{recipes.length > 0 && <ListWrapper items={recipes} columns={getColumns(t)} />}</Page>
}

Dish.propTypes = {
  location: objectOf(any).isRequired,
}

export default Dish
