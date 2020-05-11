import {ALL, BY_RECIPE_TYPE, LOGIN, ONE} from '../constants/resources_type'
import {GET, POST} from '../constants/methods'
import {RECIPE_TYPES, RECIPES, USERS} from '../constants/resources'

const {REACT_APP_API_HOST, REACT_APP_API_VERSION, REACT_APP_API_PORT, REACT_APP_API_PROTOCOL} = process.env

export const apiUrl = `${REACT_APP_API_PROTOCOL}://${REACT_APP_API_HOST}:${REACT_APP_API_PORT}/api/${REACT_APP_API_VERSION}`

const endpoints = {
  v1: {
    [RECIPES]: {
      [GET]: {
        [ALL]: `${RECIPES}`,
        [ONE]: (meta) => `${RECIPES}/${meta}`,
        [BY_RECIPE_TYPE]: (meta) => `${RECIPES}/${RECIPE_TYPES}/${meta}`,
      },
    },
    [USERS]: {
      [POST]: {
        [LOGIN]: 'login_check',
      },
    },
    [RECIPE_TYPES]: {
      [GET]: {
        [ALL]: `${RECIPE_TYPES}`,
        [ONE]: (meta) => `${RECIPE_TYPES}/${meta}`,
      },
    },
  },
}

export const getUrl = (resource, method, type, meta) => {
  try {
    const endpoint = endpoints[REACT_APP_API_VERSION][resource][method][type]

    return meta ? `${apiUrl}/${endpoint(meta)}` : `${apiUrl}/${endpoint}`
  } catch (error) {
    return `${apiUrl}/${REACT_APP_API_VERSION}`
  }
}
