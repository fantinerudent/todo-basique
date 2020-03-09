import React from "react";

const TodoList = ({todoListFiltered, todoList, removeTodo, todoChecked}) => {

  const handleClick = event => {
    const todoToRemove = todoList.find(
      item => item.id === Number(event.currentTarget.id)
    );
    removeTodo(todoToRemove);
  };

  
  const handleChange = (event) => {
    let theTodoChecked = Number(event.currentTarget.id);
    todoChecked(theTodoChecked);


  }

  return (
    <ul>
      {todoListFiltered.map(todo => (
        <li key={todo.id} >
          <input id={todo.id} type='checkbox' onChange={handleChange}/>
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
