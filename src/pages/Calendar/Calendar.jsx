import React from 'react'
import './Calendar.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import useCalendar from '../../store/Calendar'
import { createEventId } from '../../data'

export default function Calendar() {
  const {currentEvents,setcurrentEvents}=useCalendar()
  const handleEvents=async (events)=>{
    await Promise.resolve(setcurrentEvents(events))
  }
  const handleSelect=(selectInfo)=>{
    let title=prompt("Enter a title for this event")
    let calendarApi=selectInfo.view.calendar
    calendarApi.unselect()
    if(title){
      calendarApi.addEvent({
        id:createEventId(),
        title,
        start:selectInfo.start,
        end:selectInfo.end,
        allDay:selectInfo.allDay
      })
    }
  }
  const handleEventClick=(clickInfo)=>{
    if(confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)){
      clickInfo.event.remove()
    }
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
            />
        </div>
    </div>
  )
}
