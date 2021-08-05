import React from "react";

const TodoList = props => {
    
    return (
      <div className="todo-list">
        {props.Todos.map(todo => (
          <Todo key={todo.id} todo={todo}/>
        ))}
        <button onClick={props.clearAll} className="clear-btn">
          Clear All
        </button>
      </div>
    );
  };

export default GroceryList;