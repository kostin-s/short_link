import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { API_URL } from '../../config/api.config';
import { makeShortLink } from '../../shared/string/makeShortLink';
import { TypeRootState } from '../store';

import { IShortLink, IStatistics } from './api.interface';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['ShortLink'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders(headers, api) {
      const { getState } = api;

      const token = (getState() as TypeRootState).auth.accessToken;

      if (token) {
        headers.set('Authorization', 'Bearer ' + token);
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    getStatistics: builder.query<IShortLink[], IStatistics>({
      query: ({ limit, offset }) => ({
        url: '/statistics',
        params: { offset, limit },
      }),
      transformResponse: (response: IShortLink[]) => {
        return response.map(item => {
          const newItem = Object.assign(item, { key: item.key });
          newItem.short = makeShortLink(item.short);
          return newItem;
        });
      },
      providesTags: () => [{ type: 'ShortLink' }],
    }),
    squeeze: builder.mutation<IShortLink, string>({
      query: link => ({
        url: '/squeeze',
        method: 'POST',
        params: { link },
      }),
      invalidatesTags: () => [{ type: 'ShortLink' }],
    }),
  }),
});
