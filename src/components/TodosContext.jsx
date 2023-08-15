import { nanoid } from "nanoid";
import { createContext ,useState  } from "react";
import PropTypes from 'prop-types';

const TodosContext = createContext({
  todos:[],
  addTodo:()=>{},
  removeTodo:()=>{},
  toggleStatus:()=>{},
});

const TodosProvider =({ children })=>{
  const [todos, setTodos]= useState([]);

  const addTodo=(todo)=>{
    setTodos([...todos,{id:nanoid(), todo, status:false}]);
  };

  const toggleStatus =(id)=>{
    const newTodos = todos.map((todo)=>id===todo.id?{...todo,status:!todo.status}:todo);
    setTodos(newTodos);
  };

  const removeTodo =(id)=>{
    const newTodos = todos.filter(todo=>id!==todo.id);
    setTodos(newTodos);
  };

  return (
  <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleStatus }}>
    {children}
  </TodosContext.Provider>
  );
};

export {TodosContext, TodosProvider};

TodosProvider.propTypes = {
  children:PropTypes.array,
};
