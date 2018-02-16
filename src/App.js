import React, { Component } from 'react';
import NavHeader from './components/NavHeader';
import ListTodos from './components/ListTodos';
import AddTodo from './components/AddTodo';
import './App.css';

//Parent Component!
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todosList: props.todosList
    };
  }

  //function to change state of checkbox
  // checkDone = () => {
  //   this.setState({
  //     todosList: todosList.complete === true
  //   })
  // }


  // Function should be in the parent
  pushTodo = (text) => {
    let newTodoTemp = {
      title: text,
      complete: false
    }
    this.setState({
      todosList: this.state.todosList.concat(newTodoTemp)
      });
    };

  render() {
    return (
      <div className="App">
        <NavHeader />
        <AddTodo pushTodo={this.pushTodo} />
        <ListTodos todosList={this.state.todosList} />
      </div>
    );
  }
}


export default App;
