import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import{ bankActionsSlice, rickMortySlice } from'./panel';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    bankActions: bankActionsSlice.reducer,
    rickMorty: rickMortySlice.reducer,
  },
});