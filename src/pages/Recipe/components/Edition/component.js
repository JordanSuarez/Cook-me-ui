import React from 'react'

import {useParams} from 'react-router-dom'

import {RecipeFormContext} from 'common/context/RecipeFormContext'
import {UPDATE} from 'common/constants/context'
import RecipeForm from 'common/components/RecipeForm'

function EditForm() {
  const {id} = useParams()

  return (
    <RecipeFormContext.Provider value={UPDATE}>
      <RecipeForm recipeId={parseInt(id, 10)} />
    </RecipeFormContext.Provider>
  )
}

export default EditForm
