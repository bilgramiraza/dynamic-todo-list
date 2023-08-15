import PropTypes from 'prop-types';

const TodoItem=({todo, toggleStatus, removeTodo})=>{

  return (
    <li>
      <span>{todo.todo}</span>
      <input type='checkbox' value={todo.status} onClick={toggleStatus} />
      <button onClick={removeTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;


TodoItem.propTypes = {
  todo:PropTypes.object.isRequired,
  toggleStatus:PropTypes.func.isRequired,
  removeTodo:PropTypes.func.isRequired,
};
