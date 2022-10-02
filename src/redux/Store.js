import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './ContactsListSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
