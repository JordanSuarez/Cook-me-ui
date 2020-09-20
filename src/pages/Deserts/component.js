import React from 'react'

import {useTranslation} from 'react-i18next'

import {DESERTS} from 'common/constants/recipe_types'
import Page from 'common/components/Page'
import ResourceWrapper from 'common/components/ResourceWrapper'

function Deserts() {
  const {t} = useTranslation()

  return (
    <Page title={t('desertsPage.title')}>
      <ResourceWrapper recipeTypeId={DESERTS} />
    </Page>
  )
}

export default Deserts
