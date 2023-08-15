import PropTypes from 'prop-types';
import { useState } from 'react';

const TodoForm=({addTodo})=>{
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


TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
