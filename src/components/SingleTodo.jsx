import React, { Component } from 'react';


export default class SingleTodo extends Component {
  render() {
    return (
      <li>  
        <input type="checkbox" onClick={() => {
              this.props.markDone(this.props.todo.key);
          }} />
        <label>
          {this.props.todo.title}
        </label>
      </li>
    )
  }
}

