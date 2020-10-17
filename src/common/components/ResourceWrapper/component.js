import React, {useEffect, useState} from 'react'

import {func, number} from 'prop-types'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {BY_TYPE, ONE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {DELETE, GET} from 'common/constants/methods'
import {ERROR, SUCCESS} from 'common/constants/severity'
import {getEditRecipeRoute} from 'common/routing/routesResolver'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import AlertDialog from '../AlertDialog'
import formatList from 'common/helpers/formatListForSearch'
import getColumns from 'common/helpers/columns'
import ListWrapper from '../ListWrapper'

function ResourceWrapper({showToast, recipeTypeId}) {
  const {t} = useTranslation()
  const history = useHistory()
  const [recipes, setRecipes] = useState([])
  const [showDialogConfirm, setShowDialogConfirm] = useState(false)
  const [recipeId, setRecipeId] = useState('')
  const [alertDialogTitle, setAlertDialogTitle] = useState('')
  const [alertDialogContent, setAlertDialogContent] = useState('')
  const [handleAction, setHandleAction] = useState('')

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

  function editItem() {
    setShowDialogConfirm(false)

    return history.push(getEditRecipeRoute(recipeId))
  }

  // When delete icon was clicked, display dialog for confirm deletion
  function handleDeleteAction(value) {
    setRecipeId(value)
    setAlertDialogTitle(t('recipe.modal.delete.title'))
    setAlertDialogContent(t('recipe.modal.delete.content'))
    setHandleAction('delete')

    return setShowDialogConfirm(true)
  }
  function handleEditAction(value) {
    setRecipeId(value)
    setShowDialogConfirm(true)
    setAlertDialogTitle(t('recipe.modal.edit.title'))
    setAlertDialogContent(t('recipe.modal.edit.content'))
    setHandleAction('edit')

    return setShowDialogConfirm(true)
  }

  function handleAgreeAction(action) {
    if (action === 'edit') {
      return editItem()
    }
    if (action === 'delete') {
      return deleteItem()
    }

    return setShowDialogConfirm(false)
  }

  return (
    <div>
      {recipes.length > 0 && (
        <ListWrapper
          items={recipes}
          columns={getColumns(t, handleDeleteAction, handleEditAction)}
          onDeleteAction={handleDeleteAction}
          onEditAction={handleEditAction}
        >
          <AlertDialog
            open={showDialogConfirm}
            title={alertDialogTitle}
            content={alertDialogContent}
            agreeLabelButton={t('recipe.modal.button.agree')}
            disagreeLabelButton={t('recipe.modal.button.disagree')}
            onCancel={() => setShowDialogConfirm(false)}
            onAgree={() => handleAgreeAction(handleAction)}
          />
        </ListWrapper>
      )}
    </div>
  )
}

ResourceWrapper.propTypes = {
  recipeTypeId: number.isRequired,
  showToast: func.isRequired,
}

export default ResourceWrapper
