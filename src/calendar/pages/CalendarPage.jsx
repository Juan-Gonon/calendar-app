import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours} from 'date-fns'
import Navbar from "../components/Navbar";
import { localizer, getMessagesES } from '../../helpers';


const events = [{
  title: 'Cumpleaños de kamila',
  notes: 'Hay que comprar el pastel',
  start: new Date,
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Juan'
  }
}]

export function CalendarPage() {

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
    />
    </>
  )
}
