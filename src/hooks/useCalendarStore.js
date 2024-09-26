import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";

export function useCalendarStore() {
    const { events, activeEvent } = useSelector((state) => state.calendar);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    };
    const startSavingEvent = async (calendarEvent) => {
        // llegar al backend

        if (calendarEvent.id) {
            // actualizando
            dispatch(onUpdateEvent({
                ...calendarEvent
            }))
        } else {
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
        }
    };

    const startDeletingEvent = () => {
        // backend
        dispatch(onDeleteEvent())
    }

    const startLoadingEvents = async () => {
        try {
            const { data } = await calendarApi.get('events')
            const events = convertEventsToDateEvents(data.eventos)
            console.log(events)
        } catch (error) {
            console.log(error)
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
