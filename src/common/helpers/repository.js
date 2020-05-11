import axios from 'axios'

import {getAuthorization, setToken} from './authProvider'
import {getUrl} from './urlHandler'
import {LOGIN} from '../constants/resources_type'
import {POST} from '../constants/methods'
import {USERS} from '../constants/resources'

/**
 *
 * @param url
 * @param method
 * @param options
 * @returns {Q.Promise<any> | * | void | PromiseLike<any>}
 */
export const callApi = (url, method, options = {}) => axios[method](url, {...options, ...getAuthorization()}).then((response) => response)

/**
 * Login Handler
 * @param credentials
 */
export const handleLogin = (credentials) => {
  return new Promise((resolve, reject) => {
    callApi(getUrl(USERS, POST, LOGIN), POST, credentials)
      .then(({data}) => {
        setToken(data.token)

        resolve(true)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
