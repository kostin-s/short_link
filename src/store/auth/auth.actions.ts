import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { AuthService } from '../../services/auth.service';

import {
  IAuthLoginResponse,
  IAuthRequest,
  IAuthResponse,
} from './auth.interface';

export const register = createAsyncThunk<IAuthResponse, IAuthRequest>(
  'auth/register',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(username, password);

      toast.success('Вы успешно зарегистрировались!');

      return response;
    } catch (e) {
      toast.error('Ошибка регистрации!');

      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const login = createAsyncThunk<IAuthLoginResponse, IAuthRequest>(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(username, password);

      return response;
    } catch (e) {
      toast.error('Ошибка входа!');

      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  return {};
});
