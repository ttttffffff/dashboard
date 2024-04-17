export const axios=require('axios')
axios.default.timeout=5000//请求超时时间
axios.default.transformRequest=data=>JSON.stringify(data)