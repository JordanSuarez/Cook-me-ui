import React from 'react'

import {func} from 'prop-types'
import {TextField} from '@material-ui/core'
import {useTranslation} from 'react-i18next'

function SearchBar({handleChange}) {
  const {t} = useTranslation()

  return (
    <form>
      <TextField onChange={handleChange} id="standard-basic" margin="normal" label={t('searchBar.form.label.field')} name="searchBar" />
    </form>
  )
}

SearchBar.propTypes = {
  handleChange: func.isRequired,
}

export default SearchBar
