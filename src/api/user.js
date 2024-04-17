import {axios} from './basic'
export const UserURL="/api/users"
//获取所有用户
export function getUsers(){
    return axios.get(UserURL)
}
//新增用户
export function addUser(data){
    return axios.post(UserURL,data)
}
//修改用户
export function updateUser(id,data){
    return axios.put(UserURL,data,{params:{_id:id}})
}
//删除用户
export function deleteUser(id){
    return axios.delete(UserURL,{params:{_id:id}})
}