import { useContext, useState } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from './TodosContext';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  const [filter, setFilter] = useState('All');//States: All|Active|Completed

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Active' && !todo.status) return todo;
    if (filter === 'Completed' && todo.status) return todo;
    if (filter === 'All') return todo;
  });

  return (
    <section className='mb-2 mx-3 flex flex-col'>
      <div className='self-center flex flex-row justify-evenly w-1/3 mb-3 border-b-2 border-x-2 border-white rounded-md'>
        <div className='p-2 border-r-2 border-white'>
          <span className='mx-2 text-center text-md md:text-xl lg:text-2xl'>Display Mode</span>
        </div>
        <div className='p-2.5'>
          <button className='border-2 border-black rounded-md px-3 mx-2' onClick={() => setFilter('All')}>All</button>
          <button className='border-2 border-black rounded-md px-3 mx-2' onClick={() => setFilter('Active')}>Active</button>
          <button className='border-2 border-black rounded-md px-3 mx-2' onClick={() => setFilter('Completed')}>Completed</button>
        </div>
      </div>
      <ul className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
          filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
        }
      </ul>
    </section>);
};

export default TodoList;
