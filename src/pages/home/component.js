import React from 'react'

import {Link} from 'react-router-dom'

import {useTranslation} from 'react-i18next'

import Button from 'common/components/ctaButton'

import {getDesertsRoute, getDishRoute, getStartersRoute} from 'common/routing/routesResolver'

function Home() {
  const {t} = useTranslation()

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <Link to={getStartersRoute()}>
        <Button label={t('home.link.starters')} />
      </Link>
      <Link to={getDishRoute()}>
        <Button label={t('home.link.dish')} />
      </Link>
      <Link to={getDesertsRoute()}>
        <Button label={t('home.link.deserts')} />
      </Link>
    </div>
  )
}

export default Home
