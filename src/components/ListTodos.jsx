import React, { Component } from "react";
import SingleTodo from "./SingleTodo";

//Component List
export default class ListTodos extends Component {
   constructor(props){
    super(props);
   }

    render(){
      const todosList = this.props.todosList;
      // console.log(todosList);
      let listJSX = todosList.map((todo, i) => {
        // return <li>{todo.title}</li>
        return <SingleTodo todo={todo} />

      })

    return (
      <ul>
        {listJSX}
      </ul>
    );
  }
}
