import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {any, objectOf} from 'prop-types'

import {BY_TYPE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import AlertDialog from 'common/components/AlertDialog'
import formatList from 'common/helpers/formatListForSearch'
import getColumns from 'common/helpers/columns'
import ListWrapper from 'common/components/ListWrapper'
import Page from 'common/components/Page'

function Starters() {
  const {t} = useTranslation()
  const {id} = useParams()
  const [recipes, setRecipes] = useState([])
  const [displayDeleteAction, setDisplayDeleteAction] = useState(false)

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, BY_TYPE, id)

    callApi(url, GET)
      .then(({data}) => {
        setRecipes(data.map((recipe) => formatList(recipe)))
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  function handleDeleteClick() {
    return setDisplayDeleteAction(true)
  }

  return (
    <Page title={t('startersPage.title')}>
      {recipes.length > 0 && (
        <ListWrapper items={recipes} columns={getColumns(t, handleDeleteClick)} onClick={() => handleDeleteClick(id)} />
      )}
      <AlertDialog
        open={displayDeleteAction}
        title={t('recipe.modal.delete.title')}
        content={t('recipe.modal.delete.content')}
        labelButtonAccept={t('recipe.modal.delete.button.accept')}
        labelButtonRefuse={t('recipe.modal.delete.button.refuse')}
        cancelOnClick={() => setDisplayDeleteAction(false)}
      />
    </Page>
  )
}

Starters.propTypes = {
  location: objectOf(any).isRequired,
}

export default Starters
