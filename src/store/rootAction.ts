// import * as authAction from './auth/auth.actions';
import * as authAction from './auth/local/auth.actions.local';
import { linksSlice } from './links/links.slice';

export const rootAction = {
  ...authAction,
  ...linksSlice.actions,
};
