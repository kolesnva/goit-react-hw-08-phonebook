import { signUpUser, logInUser, logOutUser, refreshUser } from './Operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [signUpUser.pending]: handlePending,
    [signUpUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [signUpUser.rejected]: handleRejected,
    [logInUser.pending]: handlePending,
    [logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [logInUser.rejected]: handleRejected,
    [logOutUser.pending]: handlePending,
    [logOutUser.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = null;
    },
    [logOutUser.rejected]: handleRejected,
    [refreshUser.pending]: handlePending,
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [refreshUser.rejected]: handleRejected,
  },
});

export const authReducer = authSlice.reducer;
