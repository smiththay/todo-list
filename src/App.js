import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      taskList: [],
      id: 0
    }
  }
  //setState

  //componentDidUpdate() {}

  //componentDidMount() {}

  //addTask() {}

  //deleteTask() {}

  //checkedTask() {}

  //showAll() {}

  //showActive() {}

  //showCompleted

  //clearCompleted() {}


  render() {
    return (
      <div className="container text-center">
        <h1>To-Do List</h1>
        <input type="text" placeholder="Add Task" />
        <button className="btn" onClick='null'><b>Add</b></button>
        <ul className="list-group">
          <div className="list-group-item d-flex justify-content-between">
            <div className="col-1 border text-center" onClick='null' ></div>
            <h4>task placeholder</h4>
            <button onClick='null' className="btn"> check</button>
            <button onClick='null' className="btn"> delete </button>
          </div>
        </ul>
        <div className="row">
          <div className="col">
            <div className="row d-flex justify-content-between">
              <button onClick='null' className="btn col-3" type="button"><b>Show All</b></button>
              <button onClick='null' className="btn col-3" type="button"><b>Show Active</b></button>
              <button onClick='null' className="btn col-3" type="button"><b>Show Completed</b></button>
              <button onClick='null' className="btn col-3" type="button"><b>Clear Completed</b></button>
            </div>
          </div>
        </div>
        <p className="text-primary">There are  ## items left</p>
      </div>

    )
  }
}