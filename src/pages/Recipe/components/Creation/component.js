import React from 'react'

import {CREATE} from 'common/constants/context'
import {RecipeFormContext} from 'common/context/RecipeFormContext'
import RecipeForm from 'common/components/RecipeForm'

const CreationForm = () => (
  <RecipeFormContext.Provider value={CREATE}>
    <RecipeForm />
  </RecipeFormContext.Provider>
)

export default CreationForm
