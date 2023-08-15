import { useState } from "react"
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos]= useState([]);

  return (
    <main>
      <h1>Dynamic Todo List</h1>
      <TodoList todos={todos}/>
      <TodoForm setTodos={setTodos}/>
    </main>);
}

export default App
