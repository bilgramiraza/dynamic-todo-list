import { useState } from "react"
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos]= useState([]);

  const addTodo=(todo)=>{
    setTodos([...todos,{todo, status:false}]);
  };

  return (
    <main>
      <h1>Dynamic Todo List</h1>
      <TodoList todos={todos}/>
      <TodoForm addTodo={addTodo}/>
    </main>);
}

export default App
