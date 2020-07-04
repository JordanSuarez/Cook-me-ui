import React from 'react'

import {Link} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import Grid from '@material-ui/core/Grid'
import ShowIcon from '@material-ui/icons/VisibilityOutlined'

import {getShowRecipeRoute} from '../routing/routesResolver'
import IconButton from '../components/IconButton'

export default (t, callBack) => {
  return [
    {
      name: 'name',
      label: `${t('recipe.list.table.name')}`,
    },
    {
      name: 'instruction',
      label: `${t('recipe.list.table.instruction')}`,
    },
    {
      name: 'preparationTime',
      label: `${t('recipe.list.table.preparationTime')}`,
    },
    {
      name: 'id',
      label: `${t('recipe.list.table.action')}`,
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value) => (
          <Grid container justify="flex-end">
            <Grid item>
              <Link to={getShowRecipeRoute(value)}>
                <IconButton key={value} title={`${t('recipe.list.table.showIcon')}`}>
                  <ShowIcon />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <IconButton title={t('recipe.card.footer.iconButton.delete')} onClick={() => callBack(value)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ),
      },
    },
  ]
}
