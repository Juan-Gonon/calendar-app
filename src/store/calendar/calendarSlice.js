import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
    _id: new Date().getTime(),
    title: "Cumpleaños de kamila",
    notes: "Hay que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
        _id: "123",
        name: "Juan",
    },
};

export const calendarSlice = createSlice({
    name: "calendarSlice",
    initialState: {
        events: [tempEvent],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push(payload)
            state.activeEvent = null
        }
    },
});

// Los creadores de acciones se generan para cada función reductora de casos
export const { onSetActiveEvent, onAddNewEvent } = calendarSlice.actions;
