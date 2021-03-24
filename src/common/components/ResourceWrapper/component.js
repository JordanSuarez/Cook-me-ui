import React, {useEffect, useState} from 'react'

import {func, number} from 'prop-types'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {BY_TYPE, ONE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {DELETE, EDIT} from 'common/constants/context'
import {ERROR, SUCCESS} from 'common/constants/severity'
import {GET} from 'common/constants/methods'
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
  const [alertDialog, setAlertDialog] = useState({title: '', content: '', open: false})

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, BY_TYPE, recipeTypeId)

    callApi(url, GET)
      .then(({data}) => {
        setRecipes(data.map((recipe) => formatList(recipe)))
      })
      .catch(() => {})
  }, [])

  const deleteItem = (recipeId) => {
    const url = getEndpoint(RECIPES, DELETE, ONE, recipeId)

    setAlertDialog({...alertDialog, open: false})
    callApi(url, DELETE)
      .then(() => {
        const recipesUpdated = recipes.filter((recipe) => recipe.id !== recipeId)

        setRecipes({})
        setRecipes(recipesUpdated)

        return showToast(true, SUCCESS, t('recipe.modal.delete.toast.success.title'), t('recipe.modal.delete.toast.success.content'))
      })
      .catch(() => showToast(true, ERROR, t('recipe.modal.delete.toast.error.title'), t('recipe.modal.delete.toast.error.content')))
  }

  const editItem = (recipeId) => {
    setAlertDialog({...alertDialog, open: false})

    return history.push(getEditRecipeRoute(recipeId))
  }

  // When delete icon was clicked, display dialog for confirm action
  const handleAction = (id, action) => {
    if (action === EDIT) {
      return setAlertDialog({
        ...alertDialog,
        title: t('recipe.modal.edit.title'),
        content: t('recipe.modal.edit.content'),
        method: () => editItem(id),
        open: true,
      })
    }
    if (action === DELETE) {
      return setAlertDialog({
        ...alertDialog,
        title: t('recipe.modal.delete.title'),
        content: t('recipe.modal.delete.content'),
        method: () => deleteItem(id),
        open: true,
      })
    }

    return setAlertDialog({})
  }

  const handleAgreeAction = () => {
    alertDialog.method()

    return setAlertDialog({...alertDialog, open: false})
  }

  return (
    <div>
      {recipes.length > 0 && (
        <ListWrapper items={recipes} columns={getColumns(t, handleAction)} handleAction={handleAction}>
          <AlertDialog
            open={alertDialog.open}
            title={alertDialog.title}
            content={alertDialog.content}
            agreeLabelButton={t('recipe.modal.button.agree')}
            disagreeLabelButton={t('recipe.modal.button.disagree')}
            onCancel={() => setAlertDialog({...alertDialog, open: false})}
            onAgree={handleAgreeAction}
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
