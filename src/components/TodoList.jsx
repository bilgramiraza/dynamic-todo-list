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
    <section className='m-2'>
      <div className='flex flex-row justify-evenly w-1/6 mb-3'>
        <button className='border-2 border-black rounded-md px-3' onClick={() => setFilter('All')}>All</button>
        <button className='border-2 border-black rounded-md px-3' onClick={() => setFilter('Active')}>Active</button>
        <button className='border-2 border-black rounded-md px-3' onClick={() => setFilter('Completed')}>Completed</button>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {
          filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
        }
      </ul>
    </section>);
};

export default TodoList;
