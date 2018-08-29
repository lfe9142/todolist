import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    tasks: [],
    currentFormVaule: ''
  };

  handleTextChange(e) {
    console.log("text", e.target.value);
    this.setState({currentFormVaule: e.target.value});
  }

  handleAddTask() {
    const newTaskList = this.state.tasks.slice();
    newTaskList.push(this.state.currentFormVaule);
    this.setState({tasks: newTaskList});
    console.log(this.state.tasks);
  }

  renderList() {
    return this.state.tasks.map((item) => {
      return (<li>{item}</li>);
    });
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <input type="text" onChange={(e) => {this.handleTextChange(e)}}/>
        <button onClick={()=> this.handleAddTask()}>Add task</button>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

export default App;
