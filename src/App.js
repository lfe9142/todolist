import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    tasks: [],
    completeTasks: [],
    currentFormVaule: ''
  };

  handleTextChange(e) {
    this.setState({currentFormVaule: e.target.value});
  }

  handleAddTask() {
    const newTaskList = this.state.tasks.slice();
    newTaskList.push(this.state.currentFormVaule);
    this.setState({tasks: newTaskList, currentFormVaule: ''});
  }



  renderTaskList() {
    return this.state.tasks.map((item, index) => {
      return (<div style={this.taskListElementStyle}>
                <li>{item}</li>
                <button onClick={()=> this.handleDeleteTask(index)}>Delete</button>
                <button onClick={() => this.handleFinishTask(index)}>Finished</button>
              </div>);
    });
  }

  renderCompleteList() {
    return this.state.completeTasks.map((item, index) => {
      return (<div style={this.taskListElementStyle}>
                <li>{item}</li>
              </div>);
    });
  }

  handleDeleteTask(index) {
    const newTaskList = this.state.tasks.slice();
    newTaskList.splice(index, 1);
    this.setState({tasks: newTaskList});
  }

  handleFinishTask(index) {
    const newTaskList = this.state.tasks.slice();
    const completedTask = newTaskList.splice(index, 1);

    const newCompletedTaskList = this.state.completeTasks.slice();
    newCompletedTaskList.push(completedTask);
    console.log(newCompletedTaskList);
    this.setState({tasks: newTaskList, completeTasks: newCompletedTaskList});
  }

  render() {
    return (
      <div style={this.style}>
        <h2>Todo List</h2>
        <input type="text" value={this.state.currentFormVaule} onChange={(e) => {this.handleTextChange(e)}}/>
        <button onClick={()=> this.handleAddTask()}>Add task</button>
        <ul>{this.renderTaskList()}</ul>

        <h2>Complete Tasks</h2>
        <ul>{this.renderCompleteList()}</ul>
      </div>
    );
  }

  style = {
    margin: 'auto',
    textAlign: 'center',
  };

  taskListElementStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

}

export default App;
