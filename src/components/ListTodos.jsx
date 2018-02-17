import React, { Component } from "react";
import SingleTodo from "./SingleTodo";

//Component List
export default class ListTodos extends Component {

    render(){
      const todosList = this.props.todosList;
      let listJSX = todosList.map((todo, i) => {
        // return <li>{todo.title}</li>
        return <SingleTodo todo={todo}  
        markDone={this.props.markDone} />;

      })

    return <div>
        <ul>{listJSX}</ul>
        <button onClick={() => {
            this.props.clearTodoFunc();
          }}>
          Clear Tasks
        </button>
      </div>;
  }
}
