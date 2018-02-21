import React, { Component } from "react";
//Component List
export default class ListTodos extends Component {

    render(){

    return (
        <div>
          <select 
            className="custom-select" 
            onChange={(e) => 
              this.props.updateFilter(e.target.value)
              }>
            <option selected>Select your tasks here</option>
            <option value="All">All</option>
            <option value="Complete">Complete</option>
            <option value="Incomplete">Incomplete</option>
          </select>   
        </div>
    )
  }
}