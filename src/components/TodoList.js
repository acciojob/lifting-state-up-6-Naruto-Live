import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}

          {todo.completed ? null : (
            <button onClick={() => handleComplete(todo.id)}>
              complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;