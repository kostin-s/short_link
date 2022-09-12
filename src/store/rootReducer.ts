import { combineReducers } from '@reduxjs/toolkit';

import { api } from './api/api';
import { authSlice } from './auth/auth.slice';
import { linksSlice } from './links/links.slice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice.reducer,
  links: linksSlice.reducer,
});
