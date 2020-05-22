import React, {useEffect, useState} from 'react'

import {useTranslation} from 'react-i18next'

import {any, objectOf} from 'prop-types'

import {get} from 'lodash'

import {BY_TYPE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import CTAButton from '../../common/components/CTAButton'
import ListCard from 'common/components/ListCard'
import ListTable from '../../common/components/ListTable'
import Page from 'common/components/Page'

function Dish({location}) {
  const [recipes, setRecipes] = useState([])
  const [displayComponent, setDisplayComponent] = useState(false)
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

  function handleClick() {
    setDisplayComponent(true)
  }

  return (
    <Page title={t('dishPage.title')}>
      <CTAButton onClick={handleClick} label="test" />
      {displayComponent && <ListTable items={recipes} />}
      {!displayComponent && <ListCard items={recipes} />}
    </Page>
  )
}

Dish.propTypes = {
  location: objectOf(any).isRequired,
}

export default Dish
