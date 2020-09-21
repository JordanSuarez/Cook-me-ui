import React, {useEffect, useState} from 'react'

import {func, number} from 'prop-types'
import {useTranslation} from 'react-i18next'

import {BY_TYPE, ONE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {DELETE, GET} from 'common/constants/methods'
import {ERROR, SUCCESS} from 'common/constants/severity'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import formatList from 'common/helpers/formatListForSearch'
import getColumns from 'common/helpers/columns'
import ListWrapper from '../ListWrapper'

function ResourceWrapper({showToast, recipeTypeId}) {
  const {t} = useTranslation()
  const [recipes, setRecipes] = useState([])
  const [showDialogConfirm, setShowDialogConfirm] = useState(false)
  const [recipeId, setRecipeId] = useState('')

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, BY_TYPE, recipeTypeId)

    callApi(url, GET)
      .then(({data}) => {
        setRecipes(data.map((recipe) => formatList(recipe)))
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  function deleteItem() {
    const url = getEndpoint(RECIPES, DELETE, ONE, recipeId)

    setShowDialogConfirm(false)
    callApi(url, DELETE)
      .then(() => {
        const recipesUpdated = recipes.filter((recipe) => recipe.id !== recipeId)

        setRecipes({})
        setRecipes(recipesUpdated)

        return showToast(true, SUCCESS, t('recipe.modal.delete.toast.success.title'), t('recipe.modal.delete.toast.success.content'))
      })
      .catch(() => showToast(true, ERROR, t('recipe.modal.delete.toast.error.title'), t('recipe.modal.delete.toast.error.content')))
  }

  // When delete icon was clicked, display dialog for confirm deletion
  function handleDeleteAction(value) {
    setRecipeId(value)

    return setShowDialogConfirm(true)
  }

  function handleAgreeAction() {
    deleteItem()

    return setShowDialogConfirm(false)
  }

  return (
    <div>
      {recipes.length > 0 && (
        <ListWrapper
          items={recipes}
          columns={getColumns(t, handleDeleteAction)}
          onDeleteAction={handleDeleteAction}
          open={showDialogConfirm}
          onAgreeAction={handleAgreeAction}
          onCancelAction={() => setShowDialogConfirm(false)}
        />
      )}
    </div>
  )
}

ResourceWrapper.propTypes = {
  recipeTypeId: number.isRequired,
  showToast: func.isRequired,
}

export default ResourceWrapper
