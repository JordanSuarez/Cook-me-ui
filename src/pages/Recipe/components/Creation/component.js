import React from 'react'

import {POST} from 'common/constants/methods'
import RecipeForm from 'common/components/RecipeForm'

const CreationForm = () => <RecipeForm context={POST} />

export default CreationForm
