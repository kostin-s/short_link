import qs from 'qs';

import { axiosPublic } from '../api/interceptors';
import {
  IAuthLoginResponse,
  IAuthResponse,
} from '../store/auth/auth.interface';

export const AuthService = {
  async login(username: string, password: string) {
    const data = { username, password };

    const response = await axiosPublic.post<IAuthLoginResponse>(
      '/login',
      qs.stringify(data),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return response.data;
  },

  async register(username: string, password: string) {
    const response = await axiosPublic.post<IAuthResponse>('/register', null, {
      params: {
        username,
        password,
      },
    });

    return response.data;
  },
};
