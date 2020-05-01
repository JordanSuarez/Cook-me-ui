import axios from 'axios'

const options = {
  headers: {
    Authorization: process.env.TOKEN,
  },
}
const callApi = (url, method) => axios[method](url, options).then((response) => response)

export const getResources = (url, method) => callApi(url, method)

// TODO handle post for login, creation...
export const post = () => {}
