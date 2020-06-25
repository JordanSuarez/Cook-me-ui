import React from 'react'

import {func, string} from 'prop-types'
import {IconButton, TextField} from '@material-ui/core'
import {useTranslation} from 'react-i18next'
import ClearIcon from '@material-ui/icons/Clear'
import InputAdornment from '@material-ui/core/InputAdornment'

function SearchBar({handleChange, handleClick, value}) {
  const {t} = useTranslation()

  return (
    <form>
      <TextField
        value={value}
        onChange={handleChange}
        id="search-bar"
        size="small"
        label={t('searchBar.form.label.field')}
        name="searchBar"
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleClick}>
              <InputAdornment position="end">
                <ClearIcon />
              </InputAdornment>
            </IconButton>
          ),
        }}
      />
    </form>
  )
}

SearchBar.propTypes = {
  handleChange: func.isRequired,
  handleClick: func.isRequired,
  value: string,
}

SearchBar.defaultProps = {
  value: null,
}

export default SearchBar
