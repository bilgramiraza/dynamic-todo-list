import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosProvider } from "./components/TodosContext";

function App() {
  return (
    <TodosProvider>
      <div className="flex flex-col lg:flex-row w-screen h-screen bg-white ">
        <div className="w-full lg:w-1/5 border-b-2 lg:border-b-0">
          <header className="text-center my-2 border-b-2 py-3">
            <h1 className="text-3xl md:text-4xl lg:text-2xl font-bold font-serif">Dynamic Todo List</h1>
          </header>
          <TodoForm />
        </div>
        <div className="w-full lg:w-4/5 border-white lg:border-l-2 overflow-auto">
          <TodoList />
        </div>
      </div>
    </TodosProvider>
  );
}

export default App
