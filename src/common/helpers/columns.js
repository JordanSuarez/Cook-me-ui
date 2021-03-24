import React from 'react'

import {Link} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Grid from '@material-ui/core/Grid'
import ShowIcon from '@material-ui/icons/VisibilityOutlined'

import {DELETE, EDIT} from 'common/constants/context'
import {getShowRecipeRoute} from 'common/routing/routesResolver'
import IconButton from 'common/components/IconButton'

export default (t, handleAction) => {
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
        customBodyRender: (id) => (
          <Grid container justify="flex-end">
            <Grid item>
              <Link to={getShowRecipeRoute(id)}>
                <IconButton key={id} title={`${t('recipe.list.table.showIcon')}`}>
                  <ShowIcon />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <IconButton title={t('recipe.card.footer.iconButton.edit')} onClick={() => handleAction(id, EDIT)}>
                <EditIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton key={id} title={t('recipe.card.footer.iconButton.delete')} onClick={() => handleAction(id, DELETE)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ),
      },
    },
  ]
}
