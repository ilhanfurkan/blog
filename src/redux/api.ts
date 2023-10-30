import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';

export type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
  path: string;
  timestamp: string;
};

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.DIRECTUS_API_URL}/api/`,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any);
    const access = token.user.tokens.access;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const api = createApi({
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Market'],
  endpoints: () => ({}),
});
