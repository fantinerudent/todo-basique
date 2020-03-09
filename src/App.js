import React, {Component} from 'react';
import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList'
import Filter from './components/Filter';



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
        todoFiltered: [],
      }   
    }

  // ici se place la logique.
    handleSubmit = (value) => {
      let newTodoList = [...this.state.todoList];
      const newTodo = {id: newTodoList.length+1, name: value, checked:false};
      newTodoList.push(newTodo);
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

    todoChecked = (theTodoChecked) => {
      let newTodoList = [...this.state.todoList];
      const valueTodoChecked = newTodoList.find(item => item.id === theTodoChecked);
      valueTodoChecked.checked = !valueTodoChecked.checked;
    }

    todoListFiltered = (value) => {
         switch (value) {
      case "checked":
        let checkedtrue = this.state.todoList.filter(todo => todo.checked === true);
        this.setState({
          todoFiltered : checkedtrue
        })
        break;
      case "notChecked":
        let checkedfalse = this.state.todoList.filter(todo => todo.checked === false);
        this.setState({
          todoFiltered : checkedfalse
        })
    
        break;
      case "":
        console.log(this.state.todoFiltered)
        this.setState({
          todoFiltered : this.state.todoList
        })
        break;
        default:
          break;
      
    }


    }


  render() {
    return (
      <div>
        <h1> TODO_LIST_WORLD</h1>
         <Form  handleSubmit={this.handleSubmit}/>
          <TodoList todoChecked={this.todoChecked} todoList={this.state.todoList} todoListFiltered={this.state.todoFiltered} removeTodo={this.removeTodo} />
          <Filter todoListFiltered={this.todoListFiltered}/>
      </div>

    )
  }


}

export default App;