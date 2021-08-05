import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
      newDue: "",
      }
    }

  handleChanges = e => {
    const {name, value} = e.target
    this.setState({
      ...this.state,
          [name]: value
    });
    console.log(this.state)
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    // phone home to the App component with our new grocery to add
    const newTodo = {
        task: this.state.newTask,
        due: this.state.newDue
    }
    console.log(newTodo)
    this.props.addTodo(newTodo);
    this.setState({
        ...this.state,
            newTask: "",
            newDue: "",
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newTask"
          value={this.state.newTask}
          onChange={this.handleChanges}
        />
        <input
          type="date"
          name="newDue"
          value={this.state.newDue}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;