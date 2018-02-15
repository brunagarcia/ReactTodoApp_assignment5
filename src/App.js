import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//array with objects for list
const todosList = [
  {
    title: 'Groceris',
    complete: true
  },
  {
    title: 'Walk Dog',
    complete: true
  },
  {
    title: 'Homework',
    complete: true
  },
];

//Component form:


//Component List
class ListTasks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  const { title } = this.props.todosList;

  return (
      <div>
        <li> {this.title} </li>
      </div>
    );
  }
}

//Component todo render
class SingleTodo extends Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  eventHandler = event => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
        <div class="checkbox addTask">
          <label><input type="text" onKeyUp={this.eventHandler} placeholder="Type your task here:" />{this.state.task}</label>
        </div>
    );
  }
}

class App extends Component {
  render() {
    //Dealing with Lists
    let tasksMaped = todosList.map(task => {
      return <ListTasks
              title={task} />
      })

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">To Do List</h1>
          </header>

          <SingleTodo />
          <div>{tasksMaped}</div>
          

        </div>

    )
  }
}


export default App;
