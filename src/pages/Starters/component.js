import React, {useEffect, useState} from 'react'

import {useTranslation} from 'react-i18next'

import {get} from 'lodash'

import {any, objectOf} from 'prop-types'

import {BY_TYPE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import ListCard from 'common/components/ListCard'
import Page from 'common/components/Page'

function Starters({location}) {
  const [recipes, setRecipes] = useState([])
  const {t} = useTranslation('starters')

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, BY_TYPE, get(location, 'state.id'))

    callApi(url, GET)
      .then(({data}) => {
        setRecipes(data)
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  return (
    <Page title={t('startersPage.title')}>
      <ListCard items={recipes} />
    </Page>
  )
}

Starters.propTypes = {
  location: objectOf(any).isRequired,
}

export default Starters
