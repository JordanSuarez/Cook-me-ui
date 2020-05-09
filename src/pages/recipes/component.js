import React, {useEffect} from 'react'

import {any, arrayOf, func} from 'prop-types'

import List from '../../common/components/list'

function Recipes({recipes, fetchRecipes}) {
  useEffect(() => {
    fetchRecipes()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      LISTE RECIPES
      <List items={recipes} />
    </div>
  )
}

Recipes.propTypes = {
  fetchRecipes: func,
  recipes: arrayOf(any),
}

Recipes.defaultProps = {
  fetchRecipes: Function.prototype,
  recipes: [],
}

export default Recipes
