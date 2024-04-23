// import {axios} from './basic'
import axios from 'axios'
export const LoginURL="/api/login"
//登录
export function loginAPI(data){
    return axios.post(LoginURL,data)
}
export const registerURL="/api/reg"
//注册
export function registerAPI(data){
    return axios.post(registerURL,data)
}
//注销
export const logoutURL="/api/logout"
export function logoutAPI(){
    return axios.post(logoutURL)
}
