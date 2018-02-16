import React, { Component } from "react";

export default class AddTodo extends Component{
  constructor(){
    super()

    this.state = {
      newTodo: ""
    }
  }

  //function handling the input.
  todoHandler = (event) => {
    this.setState({
      newTodo: event.target.value
    })
  }

  render(){

    console.log(this.state.newTodo);

    return (
      <div>
        <input type="text" 
          onKeyUp={ (event) => {
            this.todoHandler(event)}
          } 
          placeholder="Type your task here:" />

          <button onClick={
              () => {this.props.pushTodo(this.state.newTodo)}
              }> + 
              </button>
      </div>
    )
  }
}