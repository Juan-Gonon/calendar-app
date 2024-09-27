import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: "uiSlice",
    initialState: {
        isDateModalOpen: false,
    },
    reducers: {
        onOpenDateModal: (state) => {
            state.isDateModalOpen = true
        },
        onCloseDateModal: (state) => {
            state.isDateModalOpen = false
        },
    },
});

// Los creadores de acciones se generan para cada función reductora de casos
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;
