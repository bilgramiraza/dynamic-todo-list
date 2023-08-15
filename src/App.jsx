import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {todo:newTodo, status:false}]);
    setNewTodo('');
  };
  const handleTodoInput =(e)=>{
    setNewTodo(e.target.value);
  };
  return (
    <main>
      <h1>Dynamic Todo List</h1>
      <form onSubmit={addTodo}>
        <label htmlFor="newTodo">Enter New Todo</label>
        <input type="text" id="newTodo" value={newTodo} onChange={handleTodoInput} />
        <button>Submit</button>
      </form>
      <div>
        <h3>All Tasks</h3>
        <ul>
          {todos.map((todo, i) => <li key={i}>task:{todo.todo} Status:{todo.status?'Complete':'Incomplete'}</li>)}
        </ul>
      </div>
    </main>
  )
}

export default App
