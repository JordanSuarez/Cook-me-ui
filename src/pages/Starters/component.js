import React, {useEffect, useState} from 'react'

import {useTranslation} from 'react-i18next'

import {get} from 'lodash'

import {any, objectOf} from 'prop-types'

import {BY_TYPE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import ListWrapper from 'common/components/ListWrapper'
import Page from 'common/components/Page'

function Starters({location}) {
  const {t} = useTranslation()
  const [recipes, setRecipes] = useState([])
  const columns = [
    {
      name: 'name',
      label: `${t('recipeListTable.name')}`,
    },
    {
      name: 'instruction',
      label: `${t('recipeListTable.instruction')}`,
    },
    {
      name: 'preparationTime',
      label: `${t('recipeListTable.preparationTime')}`,
    },
  ]

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, BY_TYPE, get(location, 'state.id'))

    callApi(url, GET)
      .then(({data}) => {
        setRecipes(
          data.map((recipe) => {
            return {...recipe, search_name: recipe.name.toLowerCase()}
          }),
        )
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  return <Page title={t('startersPage.title')}>{recipes.length > 0 && <ListWrapper items={recipes} columns={columns} />}</Page>
}

Starters.propTypes = {
  location: objectOf(any).isRequired,
}

export default Starters
