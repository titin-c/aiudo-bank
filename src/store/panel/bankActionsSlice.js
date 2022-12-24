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
            if (!action.payload ) {
                state.errorMessage = 'Ingrese alguna cantidad.'
            }else {
            state.totalCount += action.payload;
            state.errorMessage = 'Ingreso realizado correctamente.'
        }
        },
        transferencia: (state, action) => {
            if (!action.payload ) {
                state.errorMessage = 'Transfiera alguna cantidad.'
            }else if (action.payload > state.totalCount) {
                state.errorMessage = 'No tienes tanto dinero, haz un ingreso antes.'
            } else {
                state.totalCount -= action.payload;
                state.errorMessage = 'Transferencia realizada correctamente.'
            }
        },
        abono: (state, action) => {
            if (!action.payload ) {
                state.errorMessage = 'Amortice alguna cantidad.'
            }else if (action.payload > state.totalCount) {
                state.errorMessage = 'No tienes tanto dinero, haz un ingreso antes.'
            } else {
                state.totalCount -= action.payload;
                state.totalPrestamo += action.payload;
                state.errorMessage = 'Amortización realizado con éxito.'
            }

        },
    }
});


// Action creators are generated for each case reducer function
export const { ingreso, transferencia, abono, borrarMensaje } = bankActionsSlice.actions;