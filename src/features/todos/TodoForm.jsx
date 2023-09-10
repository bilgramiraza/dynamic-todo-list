import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addNewTodo } from './todosSlice';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const submitNewTodo = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(newTodo));
    setNewTodo('');
  };

  return (
    <section className='mx-auto my-3 w-3/4'>
      <form onSubmit={submitNewTodo} className='flex flex-col justify-center'>
        <label className='flex flex-col'>
          <span className='text-xl font-semibold ml-3 mb-1'>New Todo: </span>
          <input type='text' value={newTodo} onChange={handleNewTodo} className='border-2 border-black dark:border-gray-300 rounded-md text-black pl-3 py-1 dark:text-white dark:bg-slate-500'/>
        </label>
        <div className='mt-3 mx-auto'>
          <button className={`px-2 md:px-8 ${newTodo.length && 'bg-cyan-100 dark:bg-slate-500 hover:bg-cyan-300 dark:hover:bg-slate-700 focus-visible:bg-cyan-300 dark:focus-visible:bg-slate-700'} rounded-md border-2 border-black text-black dark:border-gray-300 dark:text-white`} disabled={newTodo.length===0}>Add Todo</button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
