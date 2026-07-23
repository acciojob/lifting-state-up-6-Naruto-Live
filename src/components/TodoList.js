import React from "react";

const TodoList = ({ todos, handleComplete }) => {

    console.log(todos);

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>

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