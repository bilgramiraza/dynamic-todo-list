import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

const todosAdaptor = createEntityAdapter();

const initialState = todosAdaptor.getInitialState({});

const todoSlice = createSlice({
  name:'todos',
  initialState,
  reducers:{},
  extraReducers:{}
});

export default todoSlice.reducer;

export const {

} = todoSlice.actions;
