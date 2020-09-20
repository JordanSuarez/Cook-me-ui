// import React, {useEffect, useState} from 'react'
//
// import {Link} from 'react-router-dom'
//
// import {useTranslation} from 'react-i18next'
//
// import {Card, CardContent, Grid, Typography} from '@material-ui/core'
//
// import {callApi} from 'common/helpers/repository'
//
// import {DESERTS, DISH, RECIPES, STARTERS} from 'common/constants/resources'
// import {GET} from 'common/constants/methods'
// import {getDesertsRoute, getDishRoute, getStartersRoute} from 'common/routing/routesResolver'
// import {getEndpoint} from 'common/helpers/urlHandler'
// import {TYPES} from 'common/constants/resources_type'
//
// import {classes as classesProps} from 'common/props'
//
// function Home({classes}) {
//   const {t} = useTranslation()
//   const [types, setTypes] = useState([])
//
//   useEffect(() => {
//     const url = getEndpoint(RECIPES, GET, TYPES)
//
//     callApi(url, GET)
//       .then(({data}) => {
//         setTypes(data)
//       })
//       .catch(() => {})
//     // eslint-disable-next-line
//   }, [])
//
//   function resourceFactory(type, id) {
//     switch (type) {
//       case STARTERS:
//         return {
//           pathname: getStartersRoute(id),
//           label: t('homePage.starters'),
//         }
//       case DISH:
//         return {
//           pathname: getDishRoute(id),
//           label: t('homePage.dish'),
//         }
//       case DESERTS:
//         return {
//           pathname: getDesertsRoute(id),
//           label: t('homePage.deserts'),
//         }
//       default:
//         return {}
//     }
//   }
//
//   return (
//     <div className={classes.image}>
//       {types.map(({id, name}) => {
//         const {pathname, label} = resourceFactory(name, id)
//
//         return (
//           <Grid key={id} container justify="center">
//             <Link
//               to={{
//                 pathname,
//                 state: {id},
//               }}
//               className={classes.button}
//             >
//               <Card className={classes.card}>
//                 <CardContent>
//                   <Typography className={classes.title} color="textSecondary" gutterBottom>
//                     {label}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Link>
//           </Grid>
//         )
//       })}
//     </div>
//   )
// }
//
// Home.propTypes = {
//   ...classesProps,
// }
//
// export default Home
