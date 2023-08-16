import { useContext, useState } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from './TodosContext';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  const [filter, setFilter]= useState('All');//States: All|Active|Completed

  return (
    <div>
      <div>
        <button onClick={()=>setFilter('All')}>All</button>
        <button onClick={()=>setFilter('Active')}>Active</button>
        <button onClick={()=>setFilter('Completed')}>Completed</button>
      </div>
      <ul>
        {todos.map(todo =>{
          if((filter==='Active' && !todo.status)||(filter==='Completed' && todo.status)) return ;

          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>);
};

export default TodoList;
