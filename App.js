import React, { useState } from 'react';
import './App.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleTodoClick = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].completed) {
      newTodos.splice(index, 1);
    } else {
      newTodos[index].completed = !newTodos[index].completed;
    }
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleNewTodoSubmit}>
        <input type="text" value={newTodo} onChange={handleNewTodoChange} placeholder='Enter the work'/>
        <button type="submit">Add</button>
      </form>
      <ul>
      {todos.map((todo, index) => (
  <li key={index} onClick={() => handleTodoClick(index)}>
    {todo.completed ? <s>{todo.text}</s> : todo.text}
    {todo.completed && (
      <DeleteForeverIcon
        className="delete"
        onClick={(e) => {
          e.stopPropagation();
          handleTodoClick(index);
        }}
      />
        
       )}
  </li>
))}      </ul>
    </div>
  );
}

export default App;
