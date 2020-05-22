import React, {useEffect, useState} from 'react'

import {useTranslation} from 'react-i18next'

import {any, objectOf} from 'prop-types'

import {get} from 'lodash'

import {BY_TYPE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import ListTable from 'common/components/ListTable'
import Page from 'common/components/Page'
import Pagination from 'common/components/Pagination'

function Deserts({location}) {
  const [recipes, setRecipes] = useState([])
  const {t} = useTranslation()

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
    <Page title={t('desertsPage.title')}>
      {recipes.length > 0 && <Pagination items={recipes} renderChild={(items) => <ListTable items={items} />} />}
    </Page>
  )
}

Deserts.propTypes = {
  location: objectOf(any).isRequired,
}

export default Deserts
