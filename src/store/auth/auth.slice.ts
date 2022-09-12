import { createSlice } from '@reduxjs/toolkit';

import { login, logout, register } from '../auth/local/auth.actions.local';

// import { login, logout, register } from './auth.actions';
import { IAuthInitialState } from './auth.interface';

const initialState: IAuthInitialState = {
  user: null,
  accessToken: '',
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(register.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(register.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload?.user || 'user';
      state.accessToken = payload.access_token;
    });
    builder.addCase(login.rejected, state => {
      state.isLoading = false;
      state.user = null;
      state.accessToken = '';
    });
    builder.addCase(logout.fulfilled, state => {
      state.isLoading = false;
      state.user = null;
      state.accessToken = '';
    });
  },
});
