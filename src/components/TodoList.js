import React from 'react'

const TodoList = ({todoList}) => {
   return(
    <ul>
    {todoList.map(todo => (
        <li  key={todo.id}> {todo.name} </li>
      ))}
    </ul>
   )
 };

export default TodoList