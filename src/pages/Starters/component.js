import React, {useEffect, useState} from 'react'

import {any, func, objectOf} from 'prop-types'
import {useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {BY_TYPE, ONE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {DELETE, GET} from 'common/constants/methods'
import {ERROR, INFO} from '../../common/constants/severity'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import formatList from 'common/helpers/formatListForSearch'
import getColumns from 'common/helpers/columns'
import ListWrapper from 'common/components/ListWrapper'
import Page from 'common/components/Page'

function Starters({showToast}) {
  const {t} = useTranslation()
  const {id} = useParams()
  const [recipes, setRecipes] = useState([])
  const [showDeleteAction, setShowDeleteAction] = useState(false)
  const [valueOfRecipe, setValueOfRecipe] = useState('')

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, BY_TYPE, id)

    callApi(url, GET)
      .then(({data}) => {
        setRecipes(data.map((recipe) => formatList(recipe)))
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  function test() {
    const url = getEndpoint(RECIPES, DELETE, ONE, valueOfRecipe)

    setShowDeleteAction(false)
    callApi(url, DELETE)
      .then(() => {
        const recipesUpdated = recipes.filter((recipe) => recipe.id !== valueOfRecipe)

        setRecipes({})
        setRecipes(recipesUpdated)

        return showToast(true, INFO, t('recipe.modal.delete.toast.success.title'), t('recipe.modal.delete.toast.success.content'))
      })
      .catch(() => showToast(true, ERROR, t('recipe.modal.delete.toast.error.title'), t('recipe.modal.delete.toast.error.content')))
  }

  function handleDeleteClick(value) {
    setValueOfRecipe(value)

    return setShowDeleteAction(true)
  }

  function handleAcceptOnClick() {
    test()

    return setShowDeleteAction(false)
  }

  return (
    <Page title={t('startersPage.title')}>
      {recipes.length > 0 && (
        <ListWrapper
          items={recipes}
          columns={getColumns(t, handleDeleteClick)}
          onClick={handleDeleteClick}
          open={showDeleteAction}
          acceptOnClick={handleAcceptOnClick}
          cancelOnClick={() => setShowDeleteAction(false)}
        />
      )}
    </Page>
  )
}

Starters.propTypes = {
  location: objectOf(any).isRequired,
  showToast: func.isRequired,
}

export default Starters
