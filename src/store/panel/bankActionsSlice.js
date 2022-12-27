import { createSlice } from '@reduxjs/toolkit';

export const bankActionsSlice = createSlice({
    name: 'bankActions',
    initialState: {
        totalCount: 800,
        totalPrestamo: -145000,
        errorMessage: '',
        messageType: 'info',
    },
/* He creado un objeto meramente funcional... solamente con los datos que necesito para esta app.
soy consciente que en una app real este objeto sería inutil.

y debería ser algo así

{
    id:'',
    name: '',
    email: '',
    photo: '',
    products: [
        counts: {
            countId:'',
            countName:'',
            countNumber:'',
            totalCount: 800,
        },
        {
            countId:'',
            countName:'',
            countNumber:'',
            totalCount: 800,
        },
        prestamos:{
            {
            prestamoId:'',
            prestamoName:'',
            prestamoNumber:'',
            totalPrestamo: 800,
        },

        },
    ],
}

*/
    reducers: {
        // Resetea el mensaje de error
        borrarMensaje: (state) =>{
            state.errorMessage = '';
        
        },
        //hace un ingreso en cuenta si el input tiene una cantidad... si no devuelve un error
        ingreso: (state, action) => {
            if (!action.payload ) {
                state.errorMessage = 'Ingrese alguna cantidad.';
                state.messageType = 'alert';
            }else {
            state.totalCount += action.payload;
            state.errorMessage = 'Ingreso realizado correctamente.'
            state.messageType = 'info';
        }
        },
        //realiza una trasnferencia si el input tiene alguna cantidad y si tienes suficiente dinero en la cuenta
        transferencia: (state, action) => {
            if (!action.payload ) {
                state.errorMessage = 'Transfiera alguna cantidad.';
                state.messageType = 'alert';
            }else if (action.payload > state.totalCount) {
                state.errorMessage = 'No tienes tanto dinero, haz un ingreso antes.';
                state.messageType = 'alert';
            } else {
                state.totalCount -= action.payload;
                state.errorMessage = 'Transferencia realizada correctamente.'
                state.messageType = 'info';
            }
        },
        /*realiza un abono en tu prestamo si el input tiene una valor, si tienes suficiente dinero en cuenta.
        te descuenta el dinero de la cuenta y te lo resta a añade a tu deuda del préstamo
        y si has saldado toda la deuda te avisa.*/
        abono: (state, action) => {
            if (!action.payload ) {
                state.errorMessage = 'Amortice alguna cantidad.';
                state.messageType = 'alert';
            } else if (action.payload > state.totalCount) {
                state.errorMessage = 'No tienes tanto dinero, haz un ingreso antes.';
                state.messageType = 'alert';
            } else  if(action.payload < state.totalCount && state.totalPrestamo < 0 ) {
                state.totalCount -= action.payload;
                state.totalPrestamo += action.payload;
                state.errorMessage = 'Amortización realizado con éxito.';
                state.messageType = 'info';
            } if (state.totalPrestamo > 0) {
                state.totalPrestamo = 0;
                state.errorMessage = 'Prestamo amortizado.'
                state.messageType = 'info';
            } 

        },
    }
});

export const { ingreso, transferencia, abono, borrarMensaje } = bankActionsSlice.actions;