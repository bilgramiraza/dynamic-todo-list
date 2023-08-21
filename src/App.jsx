import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosProvider } from "./components/TodosContext";

function App() {
  return (
    <TodosProvider>
      <div className="flex flex-col w-screen lg:flex-row h-screen">
        <div className="w-full lg:w-1/5 ">
          <header className="text-center my-2 border-b-2 py-3">
            <h1 className="text-3xl font-bold font-serif">Dynamic Todo List</h1>
          </header>
          <TodoForm />
        </div>
        <div className="border-l-2 border-white w-full lg:w-4/5">
          <TodoList />
        </div>
      </div>
    </TodosProvider>
  );
}

export default App
