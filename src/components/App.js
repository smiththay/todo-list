import React, { Component } from 'react'
import Task from './Task'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      taskList: [],
      completed: false,
    };

    this.inputTask = this.inputTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.checkedTask = this.checkedTask.bind(this);
  }

  componentDidUpdate() {
    window.localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
  }

  componentDidMount() {

    let taskList = window.localStorage.getItem('taskList')

    if (taskList) {
      this.setState({ taskList: JSON.parse(taskList) })
    }
    else {
      window.localStorage.setItem('taskList', [])
    }
  }

  inputTask(e) {
    this.setState({ value: e.target.value });
    //console.log(this.state.value)
  }

  addTask(e) {
    if (this.state.value !== '') {
      this.setState({
        taskList: this.state.taskList.concat({
          taskValue: this.state.value,
          id: new Date(),
          completed: false
        })
      });
      this.setState({ value: '' })
    }
    e.preventDefault();
  }

  deleteTask(taskId) {
    //console.log(taskId)
    const filteredTasks = this.state.taskList.filter(task => task.id !== taskId);
    //console.log(filteredTasks)
    this.setState({ taskList: filteredTasks });
  };

  checkedTask(id) {
    this.setState({
      taskList: this.state.taskList.map(taskItem => {
        if (taskItem.id === id) {
          taskItem.completed = !taskItem.completed
        }
        return taskItem

      })
    })
  }


  //showAll() {}

  //showActive() {}

  //showCompleted

  //clearCompleted() {}

  render() {
    return (
      <div className="container text-center border" >
        <h1>To-Do List</h1>

        <form onSubmit={this.addTask}>
          <label>
            <input type="text" placeholder="Add Task" value={this.state.value} onChange={this.inputTask} />
          </label>
          <button className="btn btn-light" type="Submit" value="Submit">
            Add
          </button>
        </form>

        {this.state.taskList.map((item, index) => <Task key={index} task={item} onDelete={this.deleteTask} onCheck={this.checkedTask} />)}

        <div className="row" >
          <div className="col">
            <div className="row d-flex justify-content-between">
              <button className="btn btn-light col-3" type="button"><b>Show All</b></button>
              <button className="btn btn-light col-3" type="button"><b>Show Active</b></button>
              <button className="btn btn-light col-3" type="button"><b>Show Completed</b></button>
              <button className="btn btn-light col-3" type="button"><b>Clear Completed</b></button>
            </div>
          </div>
        </div>
        <p className="text">There are  ## items left</p>
      </div>
    )
  }
}