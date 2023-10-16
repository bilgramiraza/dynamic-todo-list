import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: builder => ({
    fetchTodos: builder.query({
      query: () => '/api/todos',
    }),
  }),
});

export const { useFetchTodosQuery } = apiSlice;
