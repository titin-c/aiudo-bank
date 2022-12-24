import { createSlice } from '@reduxjs/toolkit'; 

export const rickMortySlice = createSlice({
    name: 'rickMorty',
    initialState: {
        page:0,
        personajes: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPersonajes: (state ) => {
        state.isLoading = true;
        },
        setPersonajes: (state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.personajes=action.payload.personajes;
            },
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPersonajes, setPersonajes } = rickMortySlice.actions;