import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours} from 'date-fns'
import Navbar from "../components/Navbar";
import { localizer } from '../../helpers';


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
    />
    </>
  )
}
