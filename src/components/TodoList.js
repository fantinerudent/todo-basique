/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from 'styled-components';

const Todo = styled.div`
  color: green;
  `

const Hammer = styled.span`
  font-size: 30px;
`




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
        <Todo key={todo.id + todo.name} style={todo.checked ? { textDecoration: 'line-through' } : { textDecoration: 'inherit' }}>
          <input
            id={todo.id}
            type="checkbox"
            checked={todo.checked}
            onChange={handleChange}
          />
          {todo.name}
          <Hammer
            id={todo.id}
            onClick={handleClick}
            style={{ marginLeft: "10px" }}
            role="img"
            aria-label="hammer"
          >
            🔨
          </Hammer>
        </Todo>
      ))}
    </ul>
  );
};

export default TodoList;
