import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: builder => ({
    fetchTodos: builder.query({
      query: () => '/api/todos',
    }),
    fetchTodo: builder.query({
      query: todoId => `/api/todos/${todoId}`,
    }),
    saveNewTodo: builder.mutation({
      query: todo => ({
        url: '/api/todos',
        method: 'POST',
        body: todo,
      }),
    }),
    editTodo: builder.mutation({
      query: ({ todoId, title }) => ({
        url: `/api/todos/${todoId}`,
        method: 'PUT',
        body: title,
      }),
    }),
    toggleTodoStatus: builder.mutation({
      query:  todoId => ({
        url: `/api/todos/${todoId}`,
        method: 'PATCH',
      }),
    }),
    removeTodo: builder.mutation({
      query:  todoId => ({
        url: `/api/todos/${todoId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useFetchTodosQuery,
  useSaveNewTodoMutation,
  useEditTodoMutation,
  useToggleTodoStatusMutation,
} = apiSlice;
