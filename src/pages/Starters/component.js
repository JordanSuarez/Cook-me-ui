import React, {useEffect, useState} from 'react'

import {any, func, objectOf} from 'prop-types'
import {useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {BY_TYPE, ONE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {DELETE, GET} from 'common/constants/methods'
import {ERROR, SUCCESS} from '../../common/constants/severity'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import AlertDialog from 'common/components/AlertDialog'
import formatList from 'common/helpers/formatListForSearch'
import getColumns from 'common/helpers/columns'
import ListWrapper from 'common/components/ListWrapper'
import Page from 'common/components/Page'

function Starters({showToast}) {
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

  function handleDeleteClick(value) {
    console.log(value)

    return setDisplayDeleteAction(true)
  }

  function test(value) {
    const url = getEndpoint(RECIPES, DELETE, ONE, value)

    setDisplayDeleteAction(false)

    callApi(url, DELETE)
      .then(() => {
        const urlUpdated = getEndpoint(RECIPES, GET, BY_TYPE, id)

        callApi(urlUpdated, GET)
          .then(({data}) => {
            setRecipes(data.map((recipe) => formatList(recipe)))
          })
          .catch(() => {})

        return showToast(true, SUCCESS, t('loginPage.toast.success.title'), t('loginPage.toast.success.content'))
      })
      .catch(() => showToast(true, ERROR, t('loginPage.toast.error.title'), t('loginPage.toast.error.content')))
  }

  console.log(displayDeleteAction)

  return (
    <Page title={t('startersPage.title')}>
      {recipes.length > 0 && <ListWrapper items={recipes} columns={getColumns(t, handleDeleteClick)} onClick={handleDeleteClick} />}
      <AlertDialog
        open={displayDeleteAction}
        title={t('recipe.modal.delete.title')}
        content={t('recipe.modal.delete.content')}
        labelButtonAccept={t('recipe.modal.delete.button.accept')}
        labelButtonRefuse={t('recipe.modal.delete.button.refuse')}
        cancelOnClick={() => setDisplayDeleteAction(false)}
        acceptOnClick={test}
      />
    </Page>
  )
}

Starters.propTypes = {
  location: objectOf(any).isRequired,
  showToast: func.isRequired,
}

export default Starters
