import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList=({todos, handleToggle, removeTodo})=>{

  return (
    <div>
      <ul>
        {todos.map(todo=>
          <TodoItem key={todo.id} todo={todo} toggleStatus={()=>handleToggle(todo.id)} removeTodo={()=>removeTodo(todo.id)} />
        )}
      </ul>
  </div>);
};

export default TodoList;


TodoList.propTypes = {
  todos:PropTypes.array,
  handleToggle: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
