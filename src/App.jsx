import { useState } from "react"
import { nanoid } from "nanoid";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
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
    <main>
      <h1>Dynamic Todo List</h1>
      <TodoList todos={todos} handleToggle={toggleStatus} removeTodo={removeTodo}/>
      <TodoForm addTodo={addTodo}/>
    </main>);
}

export default App
