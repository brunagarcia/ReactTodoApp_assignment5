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
  
  //function to clear not working
  // clearTextInput = () => {
  //   this.setState({
  //     newTodo: ''
  //   })
  // }


  render(){

    return <form className="input form-inline align-self-center">
        <input type="text" className="form-inline" onKeyUp={event => {
            this.todoHandler(event)}} onClick={this.clearTextInput}
           placeholder="Type your task here:" />

        <button type="button" className="btn btn-light form-inline" onClick={() => {
            this.props.pushTodo(this.state.newTodo);
          }}>
          +
        </button>
      </form>;
  }
}