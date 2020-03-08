import React, {Component} from 'react';
import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList'



class App extends Component {
  // le constructor est initialisé une fois puis, n'st plus touché.
 constructor(props) {
      super(props); 
      this.state = {
        todoList: [
          {id: 1, name:'chanter sous la pluie', checked: false},
          {id: 2, name:`s'inscrire au marathon`, checked: false},
          {id: 3, name:`faire une blague carambar`, checked: false},
        ],
      }   
    }

  // ici se place la logique.
    handleSubmit = (value) => {
      let newTodoList = [...this.state.todoList];
      const newTodo = {id: newTodoList.length+1, name: value, checked:false};
      newTodoList.push(newTodo);
      console.log("todolist", this.state.todoList)
      this.setState({ 
        todoList : newTodoList 
      })
    }


    removeTodo = (todoToRemove) => {
      let newTodoList = [...this.state.todoList];
      const index = newTodoList.findIndex(item => item.id === todoToRemove.id)
      newTodoList.splice(index,1);
      this.setState({ 
        todoList : newTodoList 
      })
    }


  render() {
    return (
      <div>
       
        <h1> TODO_LIST_WORLD</h1>
         <Form  handleSubmit={this.handleSubmit}/>
          <TodoList todoList={this.state.todoList} removeTodo={this.removeTodo} />
      </div>

    )
  }


}

export default App;