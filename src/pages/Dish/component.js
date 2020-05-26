import React, {useEffect, useState} from 'react'

import {useTranslation} from 'react-i18next'

import {any, objectOf} from 'prop-types'

import {get, isEmpty} from 'lodash'

import Button from '@material-ui/core/Button'

import {BY_TYPE} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {RECIPES} from 'common/constants/resources'
import Filter from 'common/components/Filter'
import ListCard from 'common/components/ListCard'
import ListTable from 'common/components/ListTable'
import Page from 'common/components/Page'
import Pagination from 'common/components/Pagination'

function Dish({location}) {
  const [recipes, setRecipes] = useState([])
  const [toggleViewport, setToggleViewport] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const {t} = useTranslation()

  useEffect(() => {
    const url = getEndpoint(RECIPES, GET, BY_TYPE, get(location, 'state.id'))

    callApi(url, GET)
      .then(({data}) => {
        setRecipes(
          data.map((recipe) => {
            return {...recipe, search_name: recipe.name.toLowerCase()}
          }),
        )
      })
      .catch(() => {})
    // eslint-disable-next-line
  }, [])

  function handleChange(value) {
    if (!isEmpty(value)) {
      setSearchResults(recipes.filter((recipe) => recipe.search_name.includes(value.toLowerCase())))
    } else {
      setSearchResults([])
    }
  }
  function handleClick() {
    setToggleViewport(!toggleViewport)
  }

  return (
    <Page title={t('dishPage.title')}>
      <Button onClick={handleClick} text="test">
        Toggle
      </Button>
      <Filter handleChange={(e) => handleChange(e.target.value)} />
      {searchResults.length > 0 && <ListTable items={searchResults} />}
      {searchResults.length === 0 && recipes.length > 0 && (
        <Pagination items={recipes} renderChild={(items) => (toggleViewport ? <ListTable items={items} /> : <ListCard items={items} />)} />
      )}
    </Page>
  )
}

Dish.propTypes = {
  location: objectOf(any).isRequired,
}

export default Dish
