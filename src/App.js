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
      completeList: props.completeList,
      doneList: props.doneList,
      todosList: props.todosList
    };
  }

  // Function should be in the parent
  pushTodo = text => {
    let newTodoTemp = {
      title: text,
      complete: false,
      key: new Date().getTime()
    };
    this.setState({
      todosList: this.state.todosList.concat(newTodoTemp),
      newTodoTemp

    });
  };

  markDone = key => {
    this.state.todosList.forEach((todo)=>{
      if (todo.key === key){
        todo.complete = !todo.complete
      }
    })
    this.setState({
      todosList: this.state.todosList
    })
  }

  // Function to clean the todo list. 
  //   check if the complete state are true, if yes, when click the button change to false.
  clearTodoFunc = () => {
    let result = this.state.todosList.filter(todo => todo.complete === true);
    let rest = this.state.todosList.filter(todo => todo.complete === false);
    this.setState({ 
      completeList: this.state.todosList,
      doneList: this.state.doneList.concat(result),
      todosList: rest
    });
     
  }
  
  render() {
    return (
    <div>
        <NavHeader />
        <AddTodo pushTodo={this.pushTodo} />
        <ListTodos todosList={this.state.todosList} 
          clearTodoFunc={this.clearTodoFunc} 
          markDone={this.markDone}/>
    </div>
    );
  }
}


export default App;
