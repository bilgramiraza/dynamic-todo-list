import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList=({todos, handleToggle, removeTodo})=>{

  return (
    <div>
      <ul>
        {todos.map((todo,i)=>
          <TodoItem key={i} todo={todo} toggleStatus={()=>handleToggle(i)} removeTodo={()=>removeTodo(i)} />
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
