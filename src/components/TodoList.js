import React from "react";

const TodoList = ({todoList, removeTodo}) => {

  const handleClick = event => {
    const todoToRemove = todoList.find(
      item => item.id === Number(event.currentTarget.id)
    );
    removeTodo(todoToRemove);
  };

  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>
          {todo.name}
          <span
            id={todo.id}
            onClick={handleClick}
            style={{ marginLeft: "10px" }}
            role="img"
            aria-label="hammer"
          >
            🔨
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
