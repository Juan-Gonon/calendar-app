import { useSelector } from "react-redux";

export function useCalendarStore() {
    const { events, activeEvent } = useSelector((state) => state.calendar)
    console.log(events)
    return {
        events,
        activeEvent
    };
}
