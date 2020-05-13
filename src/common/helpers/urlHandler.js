import {ALL, BY_RECIPE_TYPE, LOGIN, ONE} from '../constants/resources_type'
import {GET, POST} from '../constants/methods'
import {RECIPE_TYPES, RECIPES, USERS} from '../constants/resources'

const {REACT_APP_API_HOST, REACT_APP_API_VERSION, REACT_APP_API_PORT, REACT_APP_API_PROTOCOL} = process.env

/**
 * Endpoints MAP
 * @type {{v1: {[p: string]: {"[GET]": {"[ALL]": string, "[BY_RECIPE_TYPE]": function(*): string, "[ONE]": function(*): string}}|{"[POST]": {"[LOGIN]": string}}|{"[GET]": {"[ALL]": string, "[ONE]": function(*): string}}, "[RECIPES]": {[p: string]: {"[ALL]": string, "[BY_RECIPE_TYPE]": function(*): string, "[ONE]": function(*): string}, "[GET]": {[p: string]: string|(function(*): string), "[ALL]": string, "[BY_RECIPE_TYPE]": (function(*): string), "[ONE]": (function(*): string)}}, "[RECIPE_TYPES]": {[p: string]: {"[ALL]": string, "[ONE]": function(*): string}, "[GET]": {[p: string]: string|(function(*): string), "[ALL]": string, "[ONE]": (function(*): string)}}, "[USERS]": {[p: string]: {"[LOGIN]": string}, "[POST]": {[p: string]: string, "[LOGIN]": string}}}}}
 */
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

/**
 * Get base URL
 * @type {string}
 */
export const apiUrl = `${REACT_APP_API_PROTOCOL}://${REACT_APP_API_HOST}:${REACT_APP_API_PORT}/api/${REACT_APP_API_VERSION}`

/**
 * Return the proper endpoint to call
 * @param resource
 * @param method
 * @param type
 * @param meta
 * @returns {string}
 */
export const getEndpoint = (resource, method, type, meta) => {
  try {
    const endpoint = endpoints[REACT_APP_API_VERSION][resource][method][type]

    return meta ? `/${endpoint(meta)}` : `/${endpoint}`
  } catch (error) {
    return `/${REACT_APP_API_VERSION}`
  }
}
