import React, {useEffect, useState} from 'react'

import {Link} from 'react-router-dom'

import {useTranslation} from 'react-i18next'

import {get, isEmpty} from 'lodash'

import {Card, CardContent, Grid, Typography} from '@material-ui/core'

import {getDesertsRoute, getDishRoute, getStartersRoute} from 'common/routing/routesResolver'

import {classes as classesProps} from 'common/props'

function Home({classes, data}) {
  const {t} = useTranslation()
  const [types, setTypes] = useState({})

  useEffect(() => {
    data.then((recipeT) => setTypes(recipeT))
  }, [])

  return (
    <div className={classes.image}>
      {!isEmpty(types) && (
        <Grid container justify="center">
          <Link
            to={{
              pathname: getStartersRoute(),
              state: {id: get(types, 'starters')},
            }}
            className={classes.button}
          >
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {t('homePage.starters')}
                </Typography>
              </CardContent>
            </Card>
          </Link>
          <Link
            to={{
              pathname: getDishRoute(),
              state: {id: get(types, 'dish')},
            }}
            className={classes.button}
          >
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {t('homePage.dish')}
                </Typography>
              </CardContent>
            </Card>
          </Link>
          <Link
            to={{
              pathname: getDesertsRoute(),
              state: {id: get(types, 'deserts')},
            }}
            className={classes.button}
          >
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {t('homePage.deserts')}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      )}
    </div>
  )
}

Home.propTypes = {
  ...classesProps,
}

export default Home
