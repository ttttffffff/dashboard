import {create} from 'zustand';
import {INITIAL_EVENTS} from '../data/index'

const useCalendar=create((set)=>({
    currentEvents:INITIAL_EVENTS,
    setCurrentEvents:(events)=>set({currentEvents:events})
}))
export default useCalendar;// 创建一个zustand存储库，用于管理日历组件的状态。