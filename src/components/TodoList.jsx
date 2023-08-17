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
    <section>
      <div>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Active')}>Active</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
      </div>
      <ul>
        {
          filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
        }
      </ul>
    </section>);
};

export default TodoList;
