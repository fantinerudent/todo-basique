import React from "react";

const TodoList = ({ todoListFiltered, todoList, removeTodo, todoChecked, styledWhenChecked }) => {

  const handleClick = event => {
    const todoToRemove = todoList.find(
      item => item.id === Number(event.currentTarget.id)
    );
    removeTodo(todoToRemove);
  };

  const handleChange = event => {
    let theTodoChecked = Number(event.currentTarget.id);
    todoChecked(theTodoChecked);
  };

  return (
    <ul>
      {todoListFiltered.map(todo => (
        <div key={todo.id + todo.name} style={todo.checked ? { textDecoration: 'line-through' } : { textDecoration: 'inherit' }}>
          <input
            id={todo.id}
            type="checkbox"
            checked={todo.checked}
            onChange={handleChange}
          />
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
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
