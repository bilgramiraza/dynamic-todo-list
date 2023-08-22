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

  return (
    <form onSubmit={handleSubmit} className='px-2'>
      <label className='mb-1'>
        <input type='text' value={title} onChange={handleChange} autoFocus className='w-full pl-2 rounded-md'/>
      </label>
      <div className='flex flex-row justify-evenly mt-2'>
        <button className='border-2 border-black rounded-md px-3 mx-2'>Submit</button>
      </div>
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

  const todoDiv = editMode ? <EditItem handleEdit={handleEdit} oldTitle={todo.title} /> : <span className='p-2 text-3xl lg:text-2xl'>{todo.title}</span>;

  return (
    <li className='border-2 rounded-e flex flex-row justify-between'>
      <label className='w-1/5 border-r-2 border-white flex justify-center'>
        <input type='checkbox' checked={todo.status} onChange={() => toggleStatus(todo.id)} className='appearance-none w-8 h-8 border-4 border-white checked:bg-white rounded-full my-auto'/>
      </label>
      <div className='self-center w-3/5'> 
        {todoDiv}
      </div>
      <div className='flex flex-col border-l-2 w-1/3'>
        <button className='p-1.5 text-black lg:text-lg' onClick={() => setEditMode(!editMode)}>{editMode?'Cancel':'Edit'}</button>
        <hr className='border-1 border-white'/>
        <button className='p-1.5 text-black lg:text-lg' onClick={() => removeTodo(todo.id)}>Delete</button>
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
