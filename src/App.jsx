import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosProvider } from "./components/TodosContext";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = ()=>{
    setDarkMode(!darkMode);
  };
  return (
    <TodosProvider>
      <div className={`${darkMode && 'dark'} flex flex-col lg:flex-row w-screen h-screen`}>
        <div className="w-full lg:w-1/5 border-b-2 lg:border-b-0 border-gray-500 bg-cyan-200 dark:bg-slate-900 dark:text-white">
          <Header darkMode={darkMode} handleDarkMode={handleDarkMode}/>
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
