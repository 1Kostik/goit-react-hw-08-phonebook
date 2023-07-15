import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactReducer } from './contactsSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
    filter: filterReducer,
  },
});
