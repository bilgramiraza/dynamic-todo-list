import { useState } from "react"
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos]= useState([]);

  const addTodo=(todo)=>{
    setTodos([...todos,{todo, status:false}]);
  };

  const toggleStatus =(index)=>{
    const newTodos = todos.map((todo,i)=>i===index?{...todo,status:!todo.status}:todo);
    setTodos(newTodos);
  };

  const removeTodo =(index)=>{
    const newTodos = [...todos];
    newTodos.splice(index,1);
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
