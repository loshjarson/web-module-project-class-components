import React from "react";
import "./Todo.css"

const Todo = props => {
    return (
      <div
        onClick={() => props.toggleCompleted(props.todo.id)}
        className={`todo${props.todo.completed ? ' completed' : ''}`}
      >
        <h2>{props.todo.task}</h2>
        <p>{props.todo.due}</p>
      </div>
    );
  };
  
  export default Todo;