import { configureStore } from "@reduxjs/toolkit";
// import todosReducer from "../features/todos/todosSlice";
import filtersReducer from "../features/filters/filtersSlice";
import { apiSlice } from "../features/api/apiSlice";

export default configureStore({
  reducer:{
    // todos: todosReducer,
    filters: filtersReducer,
    [apiSlice.reducerPath]:apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});
