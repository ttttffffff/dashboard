import { create } from 'zustand';
// import {INITIAL_EVENTS} from '../data/index'
import { getCalendarEvents } from '../api/calendar'

let INITIAL_EVENTS = []
const fetch = async () => {
    const res = await getCalendarEvents()
    if (res.data.code !== 0) {
        throw res
    }
    return res.data.data
}
INITIAL_EVENTS = await fetch()
const useCalendar = create((set) => ({
    currentEvents: INITIAL_EVENTS,
    setCurrentEvents: (events) => set({ currentEvents: events })
}))
export default useCalendar;// 创建一个zustand存储库，用于管理日历组件的状态。