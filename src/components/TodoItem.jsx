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
    <li className='border-2 rounded-e flex flex-row justify-between'>
      <label className='self-center p-2'>
        {todoDiv}
        <input type='checkbox' checked={todo.status} onChange={() => toggleStatus(todo.id)} />
      </label>
      <div className='flex flex-col border-l-2'>
        <button className='' onClick={() => removeTodo(todo.id)}>Delete</button>
        <button className='' onClick={() => setEditMode(!editMode)}>Edit</button>
      </div>
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
