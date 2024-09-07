import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActiveEvent } from "../store";

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
