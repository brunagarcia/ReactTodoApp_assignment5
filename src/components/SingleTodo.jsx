import React, { Component } from 'react';

export default class SingleTodo extends Component{
  constructor(props){
    super(props)
  }
    
  render(){

    return(
      <li>
      <input type="checkbox"/>
      {this.props.todo.title}
      </li>
    )
  }
}

// onChange={
//   () => {
//     this.props.checkDone(this.state.value)
//   }
//   }