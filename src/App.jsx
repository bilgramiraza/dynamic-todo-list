import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosProvider } from "./components/TodosContext";

function App() {
  return (
    <TodosProvider>
      <div className="dark flex flex-col lg:flex-row w-screen h-screen">
        <div className="w-full lg:w-1/5 border-b-2 lg:border-b-0 border-gray-500 bg-cyan-200 dark:bg-slate-900 dark:text-white">
          <header className="text-center my-2 border-b-2 border-gray-500 py-3">
            <h1 className="text-3xl md:text-4xl lg:text-2xl font-bold font-serif">Dynamic Todo List</h1>
          </header>
          <TodoForm />
        </div>
        <div className="w-full lg:w-4/5 border-gray-500 lg:border-l-2 overflow-auto bg-cyan-200 dark:bg-slate-900 h-full">
          <TodoList />
        </div>
      </div>
    </TodosProvider>
  );
}

export default App
