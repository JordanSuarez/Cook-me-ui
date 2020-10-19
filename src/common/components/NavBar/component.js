import React, {useState} from 'react'

import {AppBar, Button, Grid, Hidden, IconButton, Menu, MenuItem, Toolbar} from '@material-ui/core'
import {useHistory, useRouteMatch} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import LinkToCreateForm from '@material-ui/icons/AddOutlined'
import MenuIcon from '@material-ui/icons/Menu'

import {classes as classesProps} from 'common/props'
import {DESERTS, DISH, STARTERS} from 'common/constants/resources'
import {DESERTS as desertsId, DISH as dishId, STARTERS as startersId} from 'common/constants/recipe_types'
import {getCreationRecipeRoute, getDesertsRoute, getDishRoute, getLogoutRoute, getStartersRoute} from 'common/routing/routesResolver'
import CTAButton from 'common/components/CTAButton'

function NavBar({classes}) {
  const {t} = useTranslation()
  const history = useHistory()
  const match = useRouteMatch()
  const currentLocationName = match.url.replace('/', '')
  const [userAnchorEl, setUserAnchorEl] = useState(null)
  const [mainAnchorEl, setMainAnchorEl] = useState(null)
  const openUserMenu = Boolean(userAnchorEl)
  const openMainMenu = Boolean(mainAnchorEl)
  const types = [
    {id: startersId, name: STARTERS, route: getStartersRoute(), keyTrad: 'navBar.items.starters'},
    {id: dishId, name: DISH, route: getDishRoute(), keyTrad: 'navBar.items.dish'},
    {id: desertsId, name: DESERTS, route: getDesertsRoute(), keyTrad: 'navBar.items.deserts'},
  ]

  function handlePageDisplay(route) {
    return history.push(route)
  }

  function handleClose(state) {
    return state(null)
  }

  function handleLogout() {
    return history.push(getLogoutRoute())
  }

  function handleCreateFormDisplay() {
    return history.push(getCreationRecipeRoute())
  }

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.navBar}>
        <Toolbar className={classes.toolBar}>
          <Grid container wrap="nowrap" className={classes.gridContainer}>
            <Hidden smUp>
              <Grid item className={classes.gridMenuButton}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-label="menu"
                  aria-controls="menu-appbar-types"
                  aria-haspopup="true"
                  onClick={(event) => setMainAnchorEl(event.currentTarget)}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
                <Menu
                  id="menu-appbar-types"
                  anchorEl={mainAnchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={openMainMenu}
                  onClose={() => handleClose(setMainAnchorEl)}
                >
                  {/* eslint-disable-next-line array-callback-return,consistent-return */}
                  {types.map(({id, name, route, keyTrad}) => {
                    if (currentLocationName !== name) {
                      return (
                        <MenuItem key={id} onClick={() => handlePageDisplay(route)}>
                          {t(keyTrad)}
                        </MenuItem>
                      )
                    }
                  })}
                  <MenuItem className={classes.containerCreateRecipeButton}>
                    <CTAButton handleClick={handleCreateFormDisplay} label={t('listWrapper.header.button.label.creation')}>
                      <LinkToCreateForm fontSize="default" className={classes.createRecipeIcon} />
                    </CTAButton>
                  </MenuItem>
                </Menu>
              </Grid>
            </Hidden>
            <div className={classes.linkContainer}>
              {types.map(({id, name, route, keyTrad}) => {
                return (
                  <Hidden xsDown={currentLocationName !== name} key={id}>
                    <Button
                      key={id}
                      variant="text"
                      onClick={() => handlePageDisplay(route)}
                      disabled={currentLocationName === name}
                      className={currentLocationName === name ? classes.currentButton : classes.button}
                    >
                      {t(keyTrad)}
                    </Button>
                  </Hidden>
                )
              })}
            </div>
            <Grid container alignItems="center" justify="flex-end">
              <Grid item className={classes.containerCreateRecipeButton}>
                <Hidden xsDown>
                  <CTAButton handleClick={handleCreateFormDisplay} label={t('listWrapper.header.button.label.creation')}>
                    <LinkToCreateForm fontSize="default" className={classes.createRecipeIcon} />
                  </CTAButton>
                </Hidden>
              </Grid>
              <Grid item>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={(event) => setUserAnchorEl(event.currentTarget)}
                  className={classes.userIcon}
                >
                  <AccountCircle fontSize="large" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={userAnchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={openUserMenu}
                  onClose={() => handleClose(setUserAnchorEl)}
                >
                  <MenuItem onClick={handleLogout}>
                    Logout
                    <ExitToAppIcon className={classes.logoutIcon} />
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  ...classesProps,
}

export default NavBar
