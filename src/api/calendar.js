// import {axios} from './basic'
import axios from 'axios'
export const CalendarURL="/api/calendar"
//获取所有日历事件
export function getCalendarEvents(){
    return axios.get(CalendarURL)
}
//新增日历事件
export function addCalendarEvent(data){
    return axios.post(CalendarURL,data)
}
//修改日历事件
export function updateCalendarEvent(id,data){
    return axios.put(CalendarURL,data,{params:{id:id}})
}
//删除日历事件
export function deleteCalendarEvent(id){
    return axios.delete(CalendarURL,{params:{id:id}})
}