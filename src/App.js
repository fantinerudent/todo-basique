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
        newTodo: '',
      }   
    }

  // ici se place la logique.
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState((state) => { 
        console.log(state.todoList)
        state.todoList.push({id: state.todoList.length+1, name: state.newTodo, checked:false})
      })
    }
  
    handleChange = (event) => {
      this.setState({
        newTodo: event.currentTarget.value,
      })
    }


  render() {
    return (
      <div>
       
        <h1> TODO_LIST_WORLD</h1>
         <Form  handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
          <TodoList todoList={this.state.todoList} />
      </div>

    )
  }


}

export default App;
