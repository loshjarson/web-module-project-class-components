import React from "react";
import Todo from "./Todo"


const TodoList = props => {
    
    return (
      <div className="todo-list">
        {props.Todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleCompleted={props.toggleCompleted}/>
        ))}
        <button onClick={props.clearCompleted} className="clear-btn">
          Clear Completed
        </button>
      </div>
    );
  };

export default TodoList;