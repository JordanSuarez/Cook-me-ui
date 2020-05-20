import React, {useEffect, useState} from 'react'

import {Link} from 'react-router-dom'

import {useTranslation} from 'react-i18next'

import {isEmpty} from 'lodash'

import Grid from '@material-ui/core/Grid'

import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getDesertsRoute, getDishRoute, getStartersRoute} from 'common/routing/routesResolver'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import {TYPES} from 'common/constants/resources_type'
import CTAButton from 'common/components/CTAButton'
import Page from 'common/components/Page'

import {classes as classesProps} from 'common/props'

function Home({classes}) {
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
    <Page title={t('homePage.title')} className={classes.root}>
      <div className={classes.image}>
        {!isEmpty(types) && (
          <Grid container justify="center" className={classes.button}>
            <div>
              <Link
                to={{
                  pathname: getStartersRoute(),
                  state: {id: types.starters},
                }}
              >
                <CTAButton label={t('homePage.starters')} />
              </Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: getDishRoute(),
                  state: {id: types.dish},
                }}
              >
                <CTAButton label={t('homePage.dish')} />
              </Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: getDesertsRoute(),
                  state: {id: types.deserts},
                }}
              >
                <CTAButton label={t('homePage.deserts')} />
              </Link>
            </div>
          </Grid>
        )}
      </div>
    </Page>
  )
}

Home.propTypes = {
  ...classesProps,
}

export default Home
