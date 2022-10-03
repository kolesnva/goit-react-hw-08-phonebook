import { fetchContacts, addContact, deleteContact } from './Operations';
const { createSlice } = require('@reduxjs/toolkit');

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [deleteContact.fulfilled]: (state, action) => {
      state.error = null;
      // state.items = state.items.filter(
      //   contact => contact.id !== action.payload
      // );
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
      state.isLoading = false;
    },
  },
});

// export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const { setFilter } = contactsSlice.actions;
