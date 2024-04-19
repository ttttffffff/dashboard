// import {axios} from './basic'
import axios from 'axios'
export const BoardURL="/api/cards"
//获取所有看板事件
export function getCards(){
    return axios.get(BoardURL)
}
//新增看板事件
export function addCardAPI(data){
    return axios.post(BoardURL,data)
}
//修改看板事件
export function updateCardAPI(id,data){
    return axios.put(BoardURL,data,{params:{id:id}})
}
//删除看板事件
export function deleteCardAPI(id){
    return axios.delete(BoardURL,{params:{id:id}})
}