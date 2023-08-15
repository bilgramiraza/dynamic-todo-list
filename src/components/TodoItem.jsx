import PropTypes from 'prop-types';
import { TodosContext } from './TodosContext';
import { useContext } from 'react';

const TodoItem = ({ todo }) => {
  const { toggleStatus, removeTodo } = useContext(TodosContext);

  return (
    <li>
      <span>{todo.title}</span>
      <input type='checkbox' value={todo.status} onClick={() => toggleStatus(todo.id)} />
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;


TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
