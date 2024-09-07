import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export function useCalendarStore() {
    const { events, activeEvent } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    };
    const startSavingEvent = async (calendarEvent) => {
        // llegar al backend

        if (calendarEvent._id) {
            // actualizando
            dispatch(onUpdateEvent({
                ...calendarEvent
            }))
        } else {
            // creando

            dispatch(
                onAddNewEvent({
                    ...calendarEvent,
                    _id: new Date().getTime(),
                })
            );
        }
    };

    return {
        events,
        activeEvent,

        setActiveEvent,
        startSavingEvent,
    };
}
