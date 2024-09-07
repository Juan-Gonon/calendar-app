import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
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
        increment: (state /* action */) => {
            state.counter += 1;
        },
    },
});

// Los creadores de acciones se generan para cada función reductora de casos
export const { increment } = calendarSlice.actions;
