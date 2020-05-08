import axios from 'axios'

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
const callApi = (url, method, options) => axios[method](url, options).then((response) => response)

/**
 *
 * @param url
 * @param method
 * @returns {Q.Promise<any> | * | void | PromiseLike<any>}
 */
export const getResources = (url, method) => callApi(url, method)

/**
 * Login Handler
 * @param data
 */
export const handleLogin = (data) => callApi(getUrl(USERS, POST, LOGIN), POST, data)
