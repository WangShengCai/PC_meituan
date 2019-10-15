import axios from 'axios'

axios.defaults.baseURL = 'http://api.duyiedu.com'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  config.params = { // 在发送请求之前做些什么
    ...config.params,
    appkey: 'wangshengcai_1553946484946'
  }
  return config
}, function (error) { // 对错误请求做些什么
  return Promise.reject(error)
})

export default axios
