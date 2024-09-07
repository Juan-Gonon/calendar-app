import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Navbar from "../components/Navbar";
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';
import { CalendarModal } from '../components/CalendarModal';
import { useUiStore } from '../../hooks';
import { useCalendarStore } from '../../hooks';


export function CalendarPage() {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')
  const { openDateModal } = useUiStore()
  const { events, setActiveEvent } = useCalendarStore()

  const eventStyleGetter = (e, start, end, isSelected) => {
    // console.log({
    //   e, start, end, isSelected
    // })

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: '#fff'
    }

    return {
      style
    }
  }

  const onDoubleClick = (e) => {
    // console.log({ doubleClick: e })
    openDateModal()
  }
  const onSelect = (e) => {
    // console.log({ click: e })
    setActiveEvent(e)
  }
  const onViewChanged = (e) => {
    localStorage.setItem('lastView', e)
    setLastView(e)
  }
  
  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
        defaultView={lastView}
      />
      <CalendarModal />
    </>
  )
}
