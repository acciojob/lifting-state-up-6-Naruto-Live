import React , { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  
  const [todos , setTodos] = useState([
    {id: 1, text: "Learn React ", completed: false},
    {id: 2, text: "Complete Assignment ", completed: false},
    {id: 3, text: "Practice JavaScript ", completed: false}
  ]);

  const handleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: true} : todo
      )
    );
  };

  return (
    <div>
        <TodoList 
        todos={todos}
        handleComplete={handleComplete}
        />
    </div>
  )
}

export default App;
