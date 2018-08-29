import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    tasks: [],
  };

  handleAddTask() {
    const newTaskList = this.state.tasks.slice();
    newTaskList.push("add task");
    this.setState({tasks: newTaskList});
    console.log(this.state.tasks);
  }

  renderList() {

    const list = this.state.tasks.map((item) => {
      return (<li>{item}</li>);
    });
    console.log("render list", list);
    return list;
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <button onClick={()=> this.handleAddTask()}>Add task</button>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

export default App;
