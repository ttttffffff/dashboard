import axios from 'axios'
import { useNavigate,useHistory } from 'react-router-dom'
// export const axios=require('axios')
// axios.default.timeout=5000//请求超时时间
// axios.default.transformRequest=data=>JSON.stringify(data)
const myaxios=axios.create({
    timeout:5000,
    transformRequest:data=>JSON.stringify(data)

})
// const navigate=useNavigate()
myaxios.interceptors.response.use(res=>{
    return res
},error=>{
    if(error.data.code===1003){
        useHistory().push('/login')
    }else{
        return err
    }
}

)
export default myaxios
