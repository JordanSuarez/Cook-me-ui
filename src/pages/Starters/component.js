import React from 'react'

import {useTranslation} from 'react-i18next'

import {STARTERS} from 'common/constants/recipe_types'
import Page from 'common/components/Page'
import ResourceWrapper from 'common/components/ResourceWrapper'

function Starters() {
  const {t} = useTranslation()

  return (
    <Page title={t('startersPage.title')}>
      <ResourceWrapper recipeTypeId={STARTERS} />
    </Page>
  )
}

export default Starters
