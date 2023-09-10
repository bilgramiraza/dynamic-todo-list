import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid";

const todosAdaptor = createEntityAdapter();

const initialState = todosAdaptor.getInitialState({});

const todoSlice = createSlice({
  name:'todos',
  initialState,
  reducers:{
    addNewTodo:{
      reducer(state,action){
        state.entities[action.payload.id] = action.payload;
        state.ids.push(action.payload.id);
      },
      prepare(title){
        return { 
          payload:{
            id: nanoid(),
            title,
            status: false,
          },
        };
      },
    },
    removeTodo(state, action){
      delete state.entities[action.payload];
      state.ids = state.ids.filter(id => id !==action.payload);
    },
    toggleTodoStatus(state, action){
      state.entities[action.payload].status = !state.entities[action.payload].status;
    },
    editTodo:{
      reducer(state, action){
        state.entities[action.payload.id].title = action.payload.title;
      },
      prepare(id, title){
        return {
          payload:{
            id,
            title,
          },
        };
      },
    },
  },
  extraReducers:{}
});

export default todoSlice.reducer;

export const {
  addNewTodo,
  removeTodo,
  toggleTodoStatus,
  editTodo,
} = todoSlice.actions;

export const { selectAll:getAllTodos, selectById:selectTodoById } = todosAdaptor.getSelectors(state=> state.todos);
