import axios from 'axios'
// import store from '@/store';
import LocalService from '../services/secureStorage'

const instance = new LocalService()

const URL = 'http://127.0.0.1:4000/api/v1'
// const URL = 'https://jsonplaceholder.typicode.com/';

let http
let token

if (instance.getJsonValue('dataInfo')) {
  console.log(instance.getJsonValue('dataInfo'))

  if (Object.prototype.hasOwnProperty.call(instance.getJsonValue('dataInfo'), 'token')) {
    console.log('existe token')
    token = ''

    http = axios.create({
      baseURL: URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
  } else {
    http = axios.create({
      baseURL: URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
  }
} else {
  http = axios.create({
    baseURL: URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
}

http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 404) {
      throw new Error(`${err.config.url} not found`)
    }
    throw err
  }
)

// Add a request interceptor
http.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error

    return Promise.reject(error)
  }
)

// Add a response interceptor
http.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response
  },
  (error) => {
    // Do something with response error
    console.log(' *********** Handler Error *********** ')

    return Promise.reject(error)
  }
)

export default http
