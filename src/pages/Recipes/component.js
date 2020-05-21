import React, {useEffect} from 'react'

import {any, arrayOf, func} from 'prop-types'

function Recipes({fetchRecipes}) {
  useEffect(() => {
    fetchRecipes()
    // eslint-disable-next-line
  }, [])

  return <div>LISTE RECIPES</div>
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
