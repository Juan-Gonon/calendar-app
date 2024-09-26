import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";

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

    return {
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    };
}
