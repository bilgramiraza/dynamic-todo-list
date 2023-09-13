import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid";
import { StatusFilters } from "../filters/filtersSlice";

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

export const getAllTodoIds = createSelector(
  getAllTodos,
  todos => todos.map(todo => todo.id),
);

export const getFilteredTodos = createSelector(
  getAllTodos,
  state => state.filters,
  (todos, { status }) => {
    const showAllTodos = status === StatusFilters.All;
    if(showAllTodos)  return todos;

    const showAllCompletedTodos = status === StatusFilters.Completed;

    return todos.filter(todo => {
      return todo.status === showAllCompletedTodos;
    });
  },
);

export const getFilteredTodoIds = createSelector(
  getFilteredTodos,
  filteredTodos => filteredTodos.map(todo => todo.id),
);
