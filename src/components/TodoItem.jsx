import PropTypes from 'prop-types';

const TodoItem=({todo, toggleStatus})=>{

  return (
    <li>
      <span>{todo.todo}</span>
      <input type='checkbox' value={todo.status} onClick={toggleStatus} />
    </li>
  );
};

export default TodoItem;


TodoItem.propTypes = {
  todo:PropTypes.object.isRequired,
  toggleStatus:PropTypes.func.isRequired,
};
