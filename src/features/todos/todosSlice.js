import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit"
import { StatusFilters } from "../filters/filtersSlice";

const todosAdaptor = createEntityAdapter();

const initialState = todosAdaptor.getInitialState({
  status: 'idle', //idle|loading|success|failed
});

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async ()=>{
    const response = await fetch('http://localhost:3000/api/todos');
    const todos = await response.json();
    return todos;
  },
);

export const saveNewTodo = createAsyncThunk(
  'todos/saveNewTodo',
  async todo => {
    const fetchOptions = {
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept': 'application/json',
      },
      body : JSON.stringify({ title : todo }),
    };
    const response = await fetch('http://localhost:3000/api/todos',fetchOptions);
    const todos = await response.json();
    return todos.todo;
  },
);

export const toggleTodoStatus = createAsyncThunk(
  'todos/toggleTodoStatus',
  async todoId=> {
    const fetchOptions = {
      method : 'PATCH',
    };
    const response = await fetch(`http://localhost:3000/api/todos/${todoId}`,fetchOptions);
    const todos = await response.json();
    return todos.todo;
  },
);

const todoSlice = createSlice({
  name:'todos',
  initialState,
  reducers:{
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
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        todosAdaptor.setAll(state, action.payload);
        state.status = 'idle';
      })
      .addCase(saveNewTodo.pending, state => {
        state.status = 'loading';
      })
      .addCase(saveNewTodo.fulfilled, (state, action)=> {
        todosAdaptor.addOne(state,action);
        state.status = 'idle';
      })
      .addCase(toggleTodoStatus.pending, state => {
        state.status = 'loading';
      })
      .addCase(toggleTodoStatus.fulfilled, (state, action) => {
        todosAdaptor.updateOne(state, { id:action.payload.id, changes:action.payload });
        state.status = 'idle';
      });
  }
});

export default todoSlice.reducer;

export const {
  removeTodo,
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
