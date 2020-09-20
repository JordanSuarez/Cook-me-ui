import React from 'react'

import {useTranslation} from 'react-i18next'

import {DISH} from 'common/constants/recipe_types'
import Page from 'common/components/Page'
import ResourceWrapper from 'common/components/ResourceWrapper'

function Dish() {
  const {t} = useTranslation()

  return (
    <Page title={t('dishPage.title')}>
      <ResourceWrapper recipeTypeId={DISH} />
    </Page>
  )
}

export default Dish
