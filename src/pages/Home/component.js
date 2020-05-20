import React, {useEffect, useState} from 'react'

import {Link} from 'react-router-dom'

import {useTranslation} from 'react-i18next'

import {isEmpty} from 'lodash'

import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getDesertsRoute, getDishRoute, getStartersRoute} from 'common/routing/routesResolver'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import {TYPES} from 'common/constants/resources_type'
import Button from 'common/components/CTAButton'

function Home() {
  const {t} = useTranslation()
  const [types, setTypes] = useState({})

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, TYPES)

    callApi(url, GET)
      .then(({data}) => {
        setTypes(data)
      })
      .catch(() => {})
  }, [])

  return (
    <div>
      <div>
        <h1>{t('homePage.title')}</h1>
        {!isEmpty(types) && (
          <div>
            <Link
              to={{
                pathname: getStartersRoute(),
                state: {id: types.starters},
              }}
            >
              <Button label={t('homePage.starters')} />
            </Link>
            <Link
              to={{
                pathname: getDishRoute(),
                state: {id: types.dish},
              }}
            >
              <Button label={t('homePage.dish')} />
            </Link>
            <Link
              to={{
                pathname: getDesertsRoute(),
                state: {id: types.deserts},
              }}
            >
              <Button label={t('homePage.deserts')} />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
