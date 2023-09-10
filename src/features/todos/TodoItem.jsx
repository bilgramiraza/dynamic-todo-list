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
        <input type='text' value={title} onChange={handleChange} autoFocus className='border-2 border-black dark:border-gray-300 w-full pl-2 rounded-md text-black dark:text-white dark:bg-slate-500'/>
      </label>
      <div className='flex flex-row justify-evenly mt-2'>
        <button className={`${title.length && 'bg-green-700 hover:bg-green-500 dark:hover:bg-green-900 focus-visible:bg-green-500 dark:focus-visible:bg-green-900'} text-white border-2 border-black rounded-md px-3 mx-2`} disabled={title.length===0}>Submit</button>
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

  const todoDiv = editMode ? <EditItem handleEdit={handleEdit} oldTitle={todo.title} /> : <span className='p-2 text-3xl lg:text-2xl text-black dark:text-white'>{todo.title}</span>;

  return (
    <li className='border-2 border-gray-500 rounded-e flex flex-row justify-between bg-cyan-100 dark:bg-slate-700 '>
      <label className='w-1/5 border-r-2 border-gray-500 flex justify-center cursor-pointer'>
        <input type='checkbox' checked={todo.status} onChange={() => toggleStatus(todo.id)} className='appearance-none w-8 h-8 border-4 border-gray-500 checked:bg-gray-500 dark:border-white dark:checked:bg-white rounded-full my-auto cursor-pointer'/>
      </label>
      <div className='self-center w-3/5'> 
        {todoDiv}
      </div>
      <div className='flex flex-col border-l-2 border-gray-500 w-1/3'>
        <button className={`p-1.5 text-white lg:text-lg ${editMode?'bg-blue-900 hover:bg-blue-700 focus-visible:bg-blue-700':'bg-orange-700 hover:bg-orange-900 focus-visible:bg-orange-900'}`} onClick={() => setEditMode(!editMode)}>{editMode?'Cancel':'Edit'}</button>
        <hr className='border-3 border-gray-500'/>
        <button className='p-1.5 text-white lg:text-lg bg-red-700 hover:bg-red-900 focus-visible:bg-red-900' onClick={() => removeTodo(todo.id)}>Delete</button>
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
