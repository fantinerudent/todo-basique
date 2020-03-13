/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from 'styled-components'

const Todo = styled.div`
  padding-left: 10px;
  color: #003399;
  @media screen and (min-width: 200px) and (max-width: 640px)  {
    font-weight:400;
  }
  font-weight:600;
  @media screen and (min-width: 640px) {   
    font-size:2em;
  }
`

const UlStyled = styled.ul`
  padding: 20px;
  margin: 12px;
  border: 3px #86A8E7 solid;
  max-height: 60%;
  overflow: scroll;
`


const DivStyled = styled.div`
  display:flex;
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
    <UlStyled>
      {todoListFiltered.map(todo => (
        <DivStyled>
        <Todo key={todo.id + todo.name} style={todo.checked ? { textDecoration: 'line-through', color: 'darkred' } : { textDecoration: 'inherit' }}>
          <input
            style={{ marginRight: '10px'}}
            id={todo.id}
            type="checkbox"
            checked={todo.checked}
            onChange={handleChange}
          />
          {todo.name}
        </Todo>
           <span
           id={todo.id}
           onClick={handleClick}
           style={{ marginLeft: "10px" }}
           role="img"
           aria-label="hammer"
         >
           🔨
         </span>
         </DivStyled>
      ))}
    </UlStyled>
  );
};

export default TodoList;
