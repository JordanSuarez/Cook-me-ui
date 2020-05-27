import React from 'react'

import {func} from 'prop-types'
import {Grid, TextField} from '@material-ui/core'
import {useTranslation} from 'react-i18next'

function SearchBar({handleChange}) {
  const {t} = useTranslation()

  return (
    <form>
      <Grid container direction="row-reverse" spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            onChange={handleChange}
            id="search-bar"
            size="small"
            label={t('searchBar.form.label.field')}
            name="searchBar"
            type="search"
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  )
}

SearchBar.propTypes = {
  handleChange: func.isRequired,
}

export default SearchBar
