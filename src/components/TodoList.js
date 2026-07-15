import React from "react";

const TodoList = ({ todos , handleComplete }) => {
    return (
        <ul>
            {todos
                .filter(todo => !todo.completed)
                .map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>

                    <button onClick={() => handleComplete(todo.id)}>
                    Complete
                    </button>
                </li>
                ))}
        </ul>
    )
}

export default TodoList;