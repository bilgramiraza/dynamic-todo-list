import { useContext, useState } from 'react';
import { TodosContext } from './TodosContext';

const TodoForm = () => {
  const { addTodo } = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const submitNewTodo = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <section className='m-2 h-1/6'>
      <form onSubmit={submitNewTodo} className='flex flex-col justify-center h-full'>
        <label className='flex flex-col'>
          <span className='text-xl font-semibold ml-3 pb-1'>New Todo: </span>
          <input type='text' value={newTodo} onChange={handleNewTodo} className='rounded-md text-black pl-3 py-1'/>
        </label>
        <button className='mt-3 rounded-md border-2 border-black'>Add Todo</button>
      </form>
    </section>
  );
};

export default TodoForm;
