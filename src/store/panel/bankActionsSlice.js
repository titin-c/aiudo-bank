import { createSlice } from '@reduxjs/toolkit';

export const bankActionsSlice = createSlice({
    name: 'bankActions',
    initialState: {
        totalCount: 100,
        totalPrestamo: -10000,
        errorMessage: ''
    },
    reducers: {
        ingreso: (state, action) => {
            state.totalCount += action.payload;
        },
        transferencia: (state, action) => {
            if (action.payload > state.totalCount) {
                state.errorMessage = 'No tienes tanto dinero, haz un ingreso antes.'
            } else {
                state.totalCount -= action.payload;
                state.errorMessage = ''
            }
        },
        abono: (state, action) => {
            if (action.payload > state.totalCount) {
                state.errorMessage = 'No tienes tanto dinero, Haz un ingreso antes.'
            } else {
                state.totalCount -= action.payload;
                state.totalPrestamo += action.payload;
                state.errorMessage = ''
            }

        },
    }
});


// Action creators are generated for each case reducer function
export const { ingreso, transferencia, abono } = bankActionsSlice.actions;