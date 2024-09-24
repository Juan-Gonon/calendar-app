import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated'
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking',
            state.user = {},
            state.errorMessage = undefined
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated',
            state.user = payload,
            state.errorMessage = undefined
        }
    }
});

export const { checking } = authSlice.actions;