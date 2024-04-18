import React, { useEffect } from 'react'
import './Calendar.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import useCalendar from '../../store/Calendar'
import { nanoid } from 'nanoid'

import { addCalendarEvent,updateCalendarEvent,deleteCalendarEvent } from '../../api/calendar'

export default function Calendar() {
  const {currentEvents,setCurrentEvents}=useCalendar()
  const handleEvents=async (events)=>{
    await Promise.resolve(setCurrentEvents(events))
  }
  const handleSelect=(selectInfo)=>{
    let title=prompt("Enter a title for this event")
    let calendarApi=selectInfo.view.calendar
    calendarApi.unselect()
    if(title){
      const newEvent={
        id:nanoid(),
        title,
        start:selectInfo.start,
        end:selectInfo.end,
        allDay:selectInfo.allDay
      }
      //向后端发送添加数据的请求
      addCalendarEvent(newEvent).then(res=>{
        if(res.data.code!==0){
          throw res
        }
        calendarApi.addEvent(newEvent)
      }).catch(err=>{
        console.log('err in calendar event add:', err)
      })

      //向store和前端页面更新数据
      // calendarApi.addEvent({
      //   id:createEventId(),
      //   title,
      //   start:selectInfo.start,
      //   end:selectInfo.end,
      //   allDay:selectInfo.allDay
      // })
    }
  }
  const handleEventClick=(clickInfo)=>{
    if(confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)){
      deleteCalendarEvent(clickInfo.event.id).then(res=>{
        if(res.data.code!==0){
          throw res
        }
        clickInfo.event.remove()
      }).catch(err=>{
        console.log('err in delete event: ',err)
      })
      
    }
  }
  const handleEventResize=(eventSelect)=>{
    const newEvent={
      id:eventSelect.event.id,
      title:eventSelect.event.title,
      start:eventSelect.event.start.toISOString(),
      end:eventSelect.event.end.toISOString(),
      allDay:eventSelect.event.allDay
    }
    updateCalendarEvent(newEvent.id,newEvent).then(res=>{
      if(res.data.code!==0){
        throw res
      }

    }).catch(err=>{
      console.log('err in resizeEvent: ',err)
      eventSelect.revert()
    })
  }
  const handleEventDrag=(info)=>{
    const newEvent={
      id:info.event.id,
      title:info.event.title,
      start:info.event.start.toISOString(),
      end:info.event.end.toISOString(),
      allDay:info.event.allDay
    }
    updateCalendarEvent(newEvent.id,newEvent).then(res=>{
      if(res.data.code!==0){
        throw res
      }
      console.log('success')

    }).catch(err=>{
      console.log('err in dragEvent: ',err)
      info.revert()
    })
  }
  return (
    <div className="calendar-container">
        <div>
            <FullCalendar
            plugins={[dayGridPlugin,interactionPlugin,timeGridPlugin]}
            headerToolbar={{
                left:'prev,next today',
                center:"title",
                right:"dayGridMonth,timeGridWeek,timeGridDay"
            }}
            allDaySlot={false}
            initialView='timeGridWeek'
            slotDuration={"01:00:00"}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            nowIndicator={true}
            initialEvents={currentEvents}
            eventsSet={handleEvents}
            select={handleSelect}
            eventClick={handleEventClick}
            eventResize={handleEventResize}
            eventDrop={handleEventDrag}
            />
        </div>
    </div>
  )
}
