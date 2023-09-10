import { useState } from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { getAllTodos } from './todosSlice';

const TodoList = () => {
  const todos = useSelector(getAllTodos);

  const [filter, setFilter] = useState('All');//States: All|Active|Completed

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Active' && !todo.status) return todo;
    if (filter === 'Completed' && todo.status) return todo;
    if (filter === 'All') return todo;
  });

  return (
    <section className='mb-2 mx-3 flex flex-col justify-center'>
      <div className='flex flex-row w-full md:w-3/5 lg:w-1/2 xl:w-2/5 md:mx-auto justify-evenly mb-3 bg-cyan-100 dark:bg-slate-700 border-b-2 border-x-2 border-gray-500 rounded-md top-0 sticky'>
        <div className='p-1 border-r-2 border-gray-500 flex flex-row lg:w-1/3'>
          <span className='self-center mx-1 text-center text-lg text-black dark:text-white font-semibold'>Display Mode</span>
        </div>
        <div className='justify-evenly p-2.5 flex flex-row flex-wrap lg:flex-nowrap lg:w-2/3'>
          <button className={`border-2 border-gray-500 dark:border-gray-300 rounded-md px-3 mx-1 mt-1 text-black dark:text-white bg-cyan-100 dark:bg-slate-500 hover:bg-cyan-300 dark:hover:bg-slate-700 focus-visible:bg-cyan-300 dark:focus-visible:bg-slate-700 ${(filter==='All') && 'border-y-4 font-semibold'}`} onClick={() => setFilter('All')}>All</button>
          <button className={`border-2 border-gray-500 dark:border-gray-300 rounded-md px-3 mx-1 mt-1 text-black dark:text-white bg-cyan-100 dark:bg-slate-500 hover:bg-cyan-300 dark:hover:bg-slate-700 focus-visible:bg-cyan-300 dark:focus-visible:bg-slate-700 ${(filter==='Active') && 'border-y-4 font-semibold'}`} onClick={() => setFilter('Active')}>Active</button>
          <button className={`border-2 border-gray-500 dark:border-gray-300 rounded-md px-3 mx-1 mt-1 text-black dark:text-white bg-cyan-100 dark:bg-slate-500 hover:bg-cyan-300 dark:hover:bg-slate-700 focus-visible:bg-cyan-300 dark:focus-visible:bg-slate-700 ${(filter==='Completed') && 'border-y-4 font-semibold'}`} onClick={() => setFilter('Completed')}>Completed</button>
        </div>
      </div>
      <ul className='mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
        {
          filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
        }
      </ul>
    </section>);
};

export default TodoList;
