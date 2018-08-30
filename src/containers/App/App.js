import React, { Component } from "react";
import { Divider, Button } from 'semantic-ui-react';

import "./App.css";
import ItemList from "../../components/ItemList";
import ItemInput from "../../components/ItemInput";

class App extends Component {
  state = {
    todos: [],
    completedTodos: [],
    showCompleted: false
  };

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    const completedTodos = localStorage.getItem('completedTodos');

    this.setState({ completedTodos: JSON.parse(completedTodos) });
    this.setState({ todos: JSON.parse(todos)});
  }
  
  componentDidUpdate = () => {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  addItemHandler = todo => {
    this.setState({ todos: [ ...this.state.todos, todo ]})
  };

  onShowCompleted = () => {
    this.setState({ showCompleted: !this.state.showCompleted })
  }

  completeItemHandler = id => {
    const _state = [...this.state.todos];
    const completedTodo = _state.filter( todo => todo.id === id)[0];
    const updatedCompletedTodos = [...this.state.completedTodos, completedTodo];
    this.deleteItemHandler(id);
    
    this.setState({ completedTodos: [...updatedCompletedTodos ]});
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedTodos));
  }

  deleteItemHandler = id => {

    if(this.state.todos.findIndex( todo => todo.id === id ) !== -1) {
      const _state = [...this.state.todos];
      const updatedState = _state.filter( todo => todo.id !== id);
      
      this.setState({ todos: [...updatedState] });
      localStorage.setItem('todos', JSON.stringify(updatedState));
    } else {
      const _state = [...this.state.completedTodos];
      const updatedCompleted = _state.filter( todo => todo.id !== id);

      this.setState({ completedTodos: [...updatedCompleted] });
      localStorage.setItem('completedTodos', JSON.stringify(updatedCompleted));
    }

  }

  render() {
    return (
      <div className="App">
        <ItemInput addItem={this.addItemHandler} />
        <Divider horizontal>
          { this.state.showCompleted ? `${this.state.completedTodos.length} tasks completed`  : `You have ${this.state.todos.length} todos to finish` }
        </Divider>

        { 
          this.state.showCompleted 
          ? 
          <ItemList todos={this.state.completedTodos} deleteItem={this.deleteItemHandler} completedItem={this.completeItemHandler}/>
          :
          <ItemList todos={this.state.todos} deleteItem={this.deleteItemHandler} completedItem={this.completeItemHandler}/>
        }

        <Button 
          color="teal" 
          className="show-completed-button" 
          onClick={this.onShowCompleted}
        >
            
          { this.state.showCompleted ? `Show To Dos` : `Show Completed Tasks` }
        </Button>
      </div>
    );
  }
}

export default App;
