import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 创建axios实例
const request = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: "https://api.uomg.com",
    // 超时
    timeout: 5000
})

// console.log("import.meta.env:",import.meta.env) // todo

export default request;