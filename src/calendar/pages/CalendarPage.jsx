import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Navbar from "../components/Navbar";
import { localizer, getMessagesES } from '../../helpers';
import { useEffect, useState } from 'react';
import { useAuthStore, useUiStore } from '../../hooks';
import { useCalendarStore } from '../../hooks';
import { FabAddNew, FabDelete, CalendarModal } from '../';


export function CalendarPage() {
  const { user } = useAuthStore()
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')
  const { openDateModal } = useUiStore()
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore()

  const eventStyleGetter = (e/*, start, end, isSelected*/) => {
    // console.log({
    //   e, start, end, isSelected
    // })
    // console.log(e)
    const isMyEvent = ( user.uid === e.user._id) || ( user.uid === e.user.uid ) 
    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: '#fff'
    }

    return {
      style
    }
  }

  const onDoubleClick = () => {
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

  useEffect(() => {
    startLoadingEvents()
  }, [])
  
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
      <FabAddNew />
      <FabDelete />
    </>
  )
}
