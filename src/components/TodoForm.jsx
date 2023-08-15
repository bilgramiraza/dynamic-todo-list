import { useContext, useState } from 'react';
import { TodosContext } from './TodosContext';

const TodoForm=()=>{
  const { addTodo } = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState('');
  
  const handleNewTodo =(e)=>{
    setNewTodo(e.target.value);
  };

  const submitNewTodo =(e)=>{
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={submitNewTodo}>
      <label htmlFor='newTodo'>New Todo</label>
      <input type='text' value={newTodo} onChange={handleNewTodo}/>
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
