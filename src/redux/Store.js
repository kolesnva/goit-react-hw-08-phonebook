import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/Slice';
import { authReducer } from './Authorization/Slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(
      {
        key: 'auth',
        storage,
        whitelist: ['token'],
      },
      authReducer
    ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
