import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: builder => ({
    fetchTodos: builder.query({
      query: () => '/api/todos',
    }),
    saveNewTodo: builder.mutation({
      query: todo => ({
        url: '/api/todos',
        method: 'POST',
        body: todo,
      }),
    }),
  }),
});

export const {
  useFetchTodosQuery,
  useSaveNewTodoMutation
} = apiSlice;
