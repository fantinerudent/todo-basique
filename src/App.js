import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import styled from 'styled-components';

/************************ STYLE **************************/
const DivMedia = styled.div`
  display: flex;

  /* mobile first */
  @media screen and (min-width: 200px) and (max-width: 640px)  {
    
    flex-direction: column;
    font-size: 80%;
    h1 {
      font-family: 'Baloo Chettan 2', cursive;
      text-align:center;
      font-size: 200%;
    }
  }

  /* screen */
  @media screen and (min-width: 640px) {    
    h1 {
      font-family: 'Baloo Chettan 2', cursive;
      text-align:center;
      padding-top:20px;
    }
    flex-direction: column;
  };
  `;
  /************************** END OF STYLE *******************/


class App extends Component {
  // le constructor est initialisé une fois puis, n'st plus touché.
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { id: 1, name: "chanter sous la pluie", checked: false },
        { id: 2, name: `s'inscrire au marathon`, checked: false },
        { id: 3, name: `faire une blague carambar`, checked: false }
      ],
      isFilterActive: false,
      todoFiltered: [],
    };
  }

  // ici se place la logique.
  handleSubmit = value => {
    let newTodoList = [...this.state.todoList];
    const newTodo = { id: newTodoList.length + 1, name: value, checked: false };
    newTodoList.push(newTodo);
    this.setState({
      todoList: newTodoList
    });
  };

  removeTodo = todoToRemove => {
    let newTodoList = [...this.state.todoList];
    const index = newTodoList.findIndex(item => item.id === todoToRemove.id);
    newTodoList.splice(index, 1);
    this.setState({
      todoList: newTodoList
    });
  };

  todoChecked = theTodoChecked => {
    const indexTodoChecked = this.state.todoList.findIndex(
      item => item.id === theTodoChecked
    );
    const todoFiltered = [...this.state.todoList];
    todoFiltered[indexTodoChecked].checked = !todoFiltered[indexTodoChecked]
      .checked;
    this.setState({
      todoList: todoFiltered
    });
  };

  todoListFiltered = value => {
    this.setState({
      isFilterActive: true
    });
    switch (value) {
      case "checked":
        const checkedtrue = this.state.todoList.filter(
          todo => todo.checked === true
        );
        this.setState({
          todoFiltered: checkedtrue
        });
        break;
      case "notChecked":
        let checkedfalse = this.state.todoList.filter(
          todo => todo.checked === false
        );
        this.setState({
          todoFiltered: checkedfalse
        });
        break;
      default:
        this.setState({
          isFilterActive: false
        });
        break;
    }
  };



  render() {
    const todoListToDisplay = this.state.isFilterActive
      ? this.state.todoFiltered
      : this.state.todoList;

    const styleToSend = this.state.isTodoChecked
      ? { color: 'blue' }
      : { color: 'red' }

    return (
      <DivMedia>
        <h1> TODO_LIST_WORLD</h1>
        <Form handleSubmit={this.handleSubmit} />
        <TodoList
          todoChecked={this.todoChecked}
          todoList={this.state.todoList}
          todoListFiltered={todoListToDisplay}
          removeTodo={this.removeTodo}
          styledWhenChecked={styleToSend}
        />
        <Filter todoListFiltered={this.todoListFiltered} />
      </DivMedia>
    );
  }
}

export default App;
