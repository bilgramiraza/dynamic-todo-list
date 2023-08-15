import PropTypes from 'prop-types';

const TodoItem=({todo})=>{

  return (
    <li>{todo.todo}</li>
  );
};

export default TodoItem;


TodoItem.propTypes = {
  todo:PropTypes.object.isRequired,
};
