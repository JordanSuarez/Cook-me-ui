import React from 'react'

import {Link} from 'react-router-dom'

import {useTranslation} from 'react-i18next'

import Button from 'common/components/ctaButton'

import {getDesertsRoute, getDishRoute, getStartersRoute} from 'common/routing/routesResolver'

function Home() {
  const {t} = useTranslation()

  return (
    <div>
      <h1>{t('homePage.title')}</h1>
      <Link to={getStartersRoute()}>
        <Button label={t('homePage.starters')} />
      </Link>
      <Link to={getDishRoute()}>
        <Button label={t('homePage.dish')} />
      </Link>
      <Link to={getDesertsRoute()}>
        <Button label={t('homePage.deserts')} />
      </Link>
    </div>
  )
}

export default Home
