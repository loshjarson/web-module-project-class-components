import React from 'react';
import TodoList from './components/TodoList'


const todos = [
    {
      id: 1,
      task: "Wash dog",
      due: "2021-08-05 at 12:00:00pm",
      completed: false
    }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Todos: todos
    }
  }

  toggleCompleted = (todoId) => {
    const updatedTodoList = this.state.Todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed}
      }
      else {
        return todo;
      }
    });
    this.setState({
      ...this.state,
      Todos: updatedTodoList
    });
  }

  render() {
    return (
      <div>
        <TodoList Todos={this.state.Todos} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
