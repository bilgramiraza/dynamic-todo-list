import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList=({todos})=>{

  return (
    <div>
      <ul>
        {todos.map(todo=>
          <TodoItem key={todo.todo} todo={todo}/>
        )}
      </ul>
  </div>);
};

export default TodoList;


TodoList.propTypes = {
  todos:PropTypes.array,
};
