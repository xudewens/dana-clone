import axios from "axios"
import { Message } from 'element-ui'
const service = axios.create({
  baseURL: '/',
  // withCredentials: true, // 跨域请求时发送cookies
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000 // 请求超时
})
service.interceptors.request.use(
  config => {
    config.headers['Token'] = localStorage.getItem('DANA_Token') || ''
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      if (res.code === '9999') {
        return res
      } else {
        Message({
          message: res.msg,
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject('error')
      }
    }
  },
  error => {
    console.log('err' + error) // 用于调试
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service