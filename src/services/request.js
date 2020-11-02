import axios from 'axios';
import intl from 'react-intl-universal'

import { BASE_URL, TIMEOUT } from "./config";


function request(config) {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    if (res.data.code === 502) {
      localStorage.removeItem("Authorization")
      message.warning(intl.get('network.response.login.error_msg'))
      window.location.replace('/login')
    }
    return res.data
  })

  //请求拦截
  instance.interceptors.request.use(function (res) {

    if (localStorage.getItem("Authorization")) {
      res.headers["Authorization"] = "Bearer " + localStorage.getItem("Authorization")
    } 

    return res
  }, function (error) {

    // Do something with request error
    return Promise.reject(error)
  })

  // 捕获http状态码错误
  return new Promise((resolve, reject) => {
    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      if (err.response) {
        // 错误信息
        console.log(err.response);
      }
    })
  })
}

export default request;
