import axios from 'axios'
import store from '@/store'

const BASE_API = "http://192.168.14.117:7002/";

const service = axios.create({
  baseURL: BASE_API,
  timeout: 50000
})

service.interceptors.request.use(
  config => {
   
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      switch (response.status) {
        case 404:
          return response;
          break;
        default:
          break;
      }
    } else {
      return response.data;
    }
  },
  error => {
    if (error.response.data.msg) {
    }
    return Promise.reject(error)
  }
)

export default service
