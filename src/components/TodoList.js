import React from "react";

const TodoList = ({ todos, handleComplete }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span>
                        {todo.text} - {todo.completed ? "TRUE" : "FALSE"}
                    </span>

                    {!todo.completed && (
                        <button onClick={() => handleComplete(todo.id)}>
                            Complete
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;