import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loginEndpoint } from './endpoint';
import { BASE_URL } from '../config';

const api = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: builder => {
    return {
      login: builder.mutation({
        query: body => ({
          url: loginEndpoint,
          method: 'POST',
          body,
        }),
      }),
    };
  },
});

export default api;

export const { useLoginMutation } = api;
