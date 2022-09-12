import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IShortLink } from '../api/api.interface';

import { statistics } from './links.data';
import { ILinksInitialState } from './links.interface';

const initialState: ILinksInitialState = {
  links: statistics,
};

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    addLink: (state, action: PayloadAction<IShortLink>) => {
      state.links.unshift(action.payload);
    },
  },
  extraReducers: {},
});
