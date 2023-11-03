import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    fetchTodos: builder.query({
      query: () => '/api/todos',
      providesTags: (result =[]) => [
        'Todo',
        ...result.map(({ id })=>({ type:'Todo', id })),
      ],
    }),
    fetchTodo: builder.query({
      query: todoId => `/api/todos/${todoId}`,
      providesTags: (_result, _error, arg) => [{ type:'Todo', id:arg }],
    }),
    saveNewTodo: builder.mutation({
      query: todo => ({
        url: '/api/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    }),
    editTodo: builder.mutation({
      query: ({ todoId, title }) => ({
        url: `/api/todos/${todoId}`,
        method: 'PUT',
        body: { title },
      }),
      invalidatesTags: (_result, _error, arg) => [{ type:'Todo', id:arg.todoId }],
    }),
    toggleTodoStatus: builder.mutation({
      query:  todoId => ({
        url: `/api/todos/${todoId}`,
        method: 'PATCH',
      }),
      async onQueryStarted(todoId, { dispatch, queryFulfilled }){
        const patchResult = dispatch(
          apiSlice.util.updateQueryData('fetchTodos', undefined, draft => {
            const todo = draft.find(todo => todo.id === todoId);
            if(todo)  todo.status = !todo.status;
          })
        );
        try{
          await queryFulfilled;
        }catch{
          patchResult.undo();
        }
      },
    }),
    removeTodo: builder.mutation({
      query:  todoId => ({
        url: `/api/todos/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useFetchTodosQuery,
  useFetchTodoQuery,
  useSaveNewTodoMutation,
  useEditTodoMutation,
  useToggleTodoStatusMutation,
  useRemoveTodoMutation,
} = apiSlice;
