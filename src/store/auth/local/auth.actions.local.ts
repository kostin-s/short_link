import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  IAuthLoginResponse,
  IAuthRequest,
  IAuthResponse,
} from '../auth.interface';

export const register = createAsyncThunk<IAuthResponse, IAuthRequest>(
  'auth/register',
  async ({ username, password }, thunkAPI) => {
    try {
      const user = localStorage.setItem('username', username);
      localStorage.setItem('accessToken', 'access');

      toast.success('Вы успешно зарегистрировались!');

      return user;
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
      const user = localStorage.getItem('username');
      const token = localStorage.getItem('accessToken');

      if (user !== username || !token) {
        throw new Error('No token or user.');
      }

      return {
        user: user,
        access_token: token,
      };
    } catch (e) {
      toast.error(
        'Ошибка входа! Проверте данные входа или зарегистрируйтесь ещё раз.',
      );

      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  return {};
});
