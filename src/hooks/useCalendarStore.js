import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";

export function useCalendarStore() {
    const { events, activeEvent } = useSelector((state) => state.calendar);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    };
    const startSavingEvent = async (calendarEvent) => {
        // llegar al backend
        try {
            if (calendarEvent.id) {
                // actualizando
                await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent)
                dispatch(onUpdateEvent({
                    ...calendarEvent,
                    user
                }))
    
                return 
            }
                // creando
    
            const { data } = await calendarApi.post('/events', calendarEvent)
            // console.log(data);
    
            dispatch(
                onAddNewEvent({
                    ...calendarEvent,
                    id: data.evento.id,
                    user
                })
            );
            
        } catch (error) {
            // console.log(error)
            Swal.fire('Error al guardar', error.response.data.msg, 'error')
        }


        
    };

    const startDeletingEvent = async () => {
        // backend
        try {
            if( !activeEvent ){
                throw new Error('No hay evento no seleccionado')
            }

            await calendarApi.delete(`/events/${activeEvent.id}`)
            
            dispatch(onDeleteEvent())
        } catch (error) {
            Swal.fire('Error al eliminar evento', error.response.data.msg, 'error')
        }
    }

    const startLoadingEvents = async () => {
        try {
            const { data } = await calendarApi.get('events')
            const events = convertEventsToDateEvents(data.eventos)
            dispatch(onLoadEvents(events))
            // console.log(events)
        } catch (error) {
            Swal.fire('Error al cargar evento', error.response.data.msg, 'error')
        }
    }

    return {
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents
    };
}
