import React, {Component} from "react";
//Component List
export default class ListTodos extends Component {

  render() {

    return (
      <div>
        <select className="custom-select" onChange={this.props.updateFilter}>
          <option selected>Select your tasks here</option>
          <option value="ALL">All</option>
          <option value="COMPLETE">Complete</option>
          <option value="INCOMPLETE">Incomplete</option>
        </select>
      </div>
    )
  }
}