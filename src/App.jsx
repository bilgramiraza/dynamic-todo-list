import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosProvider } from "./components/TodosContext";

function App() {
  return (
    <main>
      <h1>Dynamic Todo List</h1>
      <TodosProvider>
        <TodoList />
        <TodoForm />
      </TodosProvider>
    </main>);
}

export default App
