import React from "react";
import "./styles.css";
import Todo from "./todo";

let id = 0;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  addTodo() {
    const todoText = prompt("Enter the todo");
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: id++,
          text: todoText,
          checked: true
        }
      ]
    });
  }

  delTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => id !== todo.id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addTodo()}>Add to do</button>
        <ul>
          {this.state.todos.map(todo => {
            return (
              <Todo
                todo={todo}
                delTodo={() => this.delTodo(todo.id)}
                toggleTodo={() => this.toggleTodo(todo.id)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
