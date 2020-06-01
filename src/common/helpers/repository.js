import axios from 'axios'

import {apiUrl, getEndpoint} from './urlHandler'
import {authorization, setToken} from './authProvider'

import {LOGIN} from '../constants/resources_type'
import {POST} from '../constants/methods'
import {USERS} from '../constants/resources'

/**
 * Create client instance for Axios HTTP call (set proper headers + base Url)
 * @type {AxiosInstance}
 */
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {...authorization},
})

/**
 * Call API with all axios instance method (POST, GET, PUT, PATCH, DELETE)
 * Data is empty for GET and DELETE request
 * @param url
 * @param method
 * @param data
 * @returns {Q.Promise<any> | * | void | PromiseLike<any>}
 */
export const callApi = (url, method, data = {}) => axiosInstance[method](url, data).then((response) => response)

/**
 * Login Handler
 * @param credentials
 */
export const handleLogin = (credentials) => {
  return new Promise((resolve, reject) => {
    callApi(getEndpoint(USERS, POST, LOGIN), POST, credentials)
      .then(({data}) => {
        setToken(data.token)
        // get username
        resolve(true)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
