import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosProvider } from "./components/TodosContext";

function App() {
  return (
    <TodosProvider>
      <header>
        <h1 className="">Dynamic Todo List</h1>
      </header>
      <TodoForm />
      <TodoList />
    </TodosProvider>
  );
}

export default App
