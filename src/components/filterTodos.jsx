//Component List
export default class ListTodos extends Component {

    render(){
      const todosList = this.props.todosList;
      let listJSX = todosList.map((todo, i) => {
        // return <li>{todo.title}</li>
        return <SingleTodo todo={todo}  
        markDone={this.props.markDone} />;

      })

    return (
        <div className="container content">
            <ul className="list">{listJSX}</ul>
            <button className="btn btn-danger" onClick={() => {
                this.props.clearTodoFunc();
              }}>
              Clear Tasks
            </button>
          </div>
    )
  }
}