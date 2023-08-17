import PropTypes from 'prop-types';
import { TodosContext } from './TodosContext';
import { useContext, useState } from 'react';

const EditItem = ({ handleEdit, oldTitle }) => {
  const [title, setTitle] = useState(oldTitle);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(title);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    handleEdit(oldTitle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type='text' value={title} onChange={handleChange} autoFocus/>
      </label>
      <button>Submit</button>
      <button type='button' onClick={handleCancel}>Cancel</button>
    </form>
  );
};

const TodoItem = ({ todo }) => {
  const { toggleStatus, removeTodo, editTodo } = useContext(TodosContext);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = (title) => {
    editTodo(todo.id, title);
    setEditMode(!editMode);
  };

  const todoDiv = editMode ? <EditItem handleEdit={handleEdit} oldTitle={todo.title} /> : <span>{todo.title}</span>;

  return (
    <li>
      <label>
        {todoDiv}
        <input type='checkbox' checked={todo.status} onChange={() => toggleStatus(todo.id)} />
      </label>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
      <button onClick={() => setEditMode(!editMode)}>Edit</button>
    </li>
  );
};

export default TodoItem;


TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

EditItem.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  oldTitle: PropTypes.string.isRequired,
};
