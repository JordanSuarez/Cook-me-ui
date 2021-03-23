import React from 'react'

import {useParams} from 'react-router-dom'

import {PUT} from 'common/constants/methods'
import RecipeForm from 'common/components/RecipeForm'

function EditForm() {
  const {id} = useParams()

  return <RecipeForm context={PUT} recipeId={parseInt(id, 10)} />
}

export default EditForm
