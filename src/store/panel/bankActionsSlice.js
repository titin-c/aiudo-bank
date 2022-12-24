import { createSlice } from '@reduxjs/toolkit';

export const bankActionsSlice = createSlice({
    name: 'bankActions',
    initialState: {
        totalCount: 100,
        totalPrestamo: -10000,
        errorMessage: ''
    },
    reducers: {
        borrarMensaje: (state) =>{
            state.errorMessage = ''
        },
        ingreso: (state, action) => {
            state.totalCount += action.payload;
            state.errorMessage = ''
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
                state.errorMessage = ''
            } else {
                state.totalCount -= action.payload;
                state.totalPrestamo += action.payload;
                state.errorMessage = 'Abono realizado con éxito.'
            }

        },
    }
});


// Action creators are generated for each case reducer function
export const { ingreso, transferencia, abono, borrarMensaje } = bankActionsSlice.actions;