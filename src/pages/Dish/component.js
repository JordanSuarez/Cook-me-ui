import React, {useEffect, useState} from 'react'

import {useTranslation} from 'react-i18next'

import {any, objectOf} from 'prop-types'

import {get} from 'lodash'

import {BY_TYPE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import getColumns from 'common/helpers/columns'
import getFormatList from 'common/helpers/formatListForSearch'
import ListWrapper from 'common/components/ListWrapper'
import Page from 'common/components/Page'

function Dish({location}) {
  const {t} = useTranslation()
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, BY_TYPE, get(location, 'state.id'))

    callApi(url, GET)
      .then(({data}) => {
        setRecipes(
          data.map((recipe) => {
            return getFormatList(recipe)
          }),
        )
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
