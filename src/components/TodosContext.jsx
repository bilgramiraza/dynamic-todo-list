import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';
import todoReducer from "./todoReducer";

const TodosContext = createContext({
  todos: [],
  addTodo: () => { },
  removeTodo: () => { },
  toggleStatus: () => { },
  editTodo: () => { },
});

const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (title) => {
    dispatch({ type: "ADD_TODO", payload: { title } });
  };

  const toggleStatus = (id) => {
    dispatch({ type: "TOGGLE_STATUS", payload: { id } });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  };

  const editTodo = (id, title) => {
    dispatch({ type: "EDIT_TODO", payload: { id, title} });
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleStatus, editTodo}}>
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };

TodosProvider.propTypes = {
  children: PropTypes.array,
};
