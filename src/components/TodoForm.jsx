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
    <section>
      <form onSubmit={submitNewTodo}>
        <label>
          New Todo: 
          <input type='text' value={newTodo} onChange={handleNewTodo} />
        </label>
        <button>Add Todo</button>
      </form>
    </section>
  );
};

export default TodoForm;
