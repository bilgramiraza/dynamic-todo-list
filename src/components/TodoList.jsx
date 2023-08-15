import { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from './TodosContext';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div>
      <ul>
        {todos.map(todo =>
          <TodoItem key={todo.id} todo={todo} />
        )}
      </ul>
    </div>);
};

export default TodoList;
