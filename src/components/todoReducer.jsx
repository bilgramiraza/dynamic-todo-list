import { nanoid } from "nanoid";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: nanoid(), title: action.payload.title, status: false }];
    case "REMOVE_TODO":
      return state.filter(todo => action.payload.id !== todo.id);
    case "TOGGLE_STATUS":
      return state.map(todo => action.payload.id === todo.id ? { ...todo, status: !todo.status } : todo);
    default:
      return state;
  }
};

export default todoReducer;
