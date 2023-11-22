import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../features/filters/filtersSlice";
import { apiSlice } from "../features/api/apiSlice";

export default configureStore({
  reducer:{
    filters: filtersReducer,
    [apiSlice.reducerPath]:apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});
