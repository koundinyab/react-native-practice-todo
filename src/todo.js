import React from "react";
import "./styles.css";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: props.todo,
      delTodo: props.delTodo,
      toggleTodo: props.toggleTodo
    };
  }
  render() {
    return (
      <li>
        <input
          type="checkbox"
          // Had to use props only not working with state.
          checked={this.props.todo.checked}
          onChange={this.state.toggleTodo}
        />
        <span>{this.state.todoItem.text}</span>
        <div>
          <button onClick={this.state.delTodo}>Delete</button>
        </div>
      </li>
    );
  }
}
