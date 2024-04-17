import {axios} from './basic'
export const BoardURL="/api/cards"
//获取所有看板事件
export function getCards(){
    return axios.get(BoardURL)
}
//新增看板事件
export function addCard(data){
    return axios.post(BoardURL,data)
}
//修改看板事件
export function updateCard(id,data){
    return axios.put(BoardURL,data,{params:{id:id}})
}
//删除看板事件
export function deleteCard(id){
    return axios.delete(BoardURL,{params:{id:id}})
}