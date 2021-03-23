import React, { Component } from 'react'
import Task from './Task'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      taskList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);

  }
  //setState

  // componentDidUpdate() {}
  // windowlocalStorage.setItem

  // componentDidMount() {}
  // window.localStorage.getItem


  handleChange(e) {
    this.setState({ value: e.target.value });
    //console.log(this.state.value)
  }

  addTask(e) {
    //if(this.state.value !== ''){
  
    this.setState({ taskList: this.state.taskList.concat(this.state.value)});
    this.setState({ value: '' })
   
    e.preventDefault();
  }
//}

  //deleteTask() {}

  //checkedTask() {}

  //showAll() {}

  //showActive() {}

  //showCompleted

  //clearCompleted() {}

  render() {
    return (
      <div className="container text-center border">
        <h1>To-Do List</h1>

        <form onSubmit={this.addTask}>
          <label>
            <input type="text" placeholder="Add Task" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="Submit" value="Submit" />
        </form>

        {this.state.taskList.map((item, index) => <Task key={index} task={item} />)}

        <div className="row">
          <div className="col">
            <div className="row d-flex justify-content-between">
              <button onClick='null' className="btn btn-light col-3" type="button"><b>Show All</b></button>
              <button onClick='null' className="btn btn-light col-3" type="button"><b>Show Active</b></button>
              <button onClick='null' className="btn btn-light col-3" type="button"><b>Show Completed</b></button>
              <button onClick='null' className="btn btn-light col-3" type="button"><b>Clear Completed</b></button>
            </div>
          </div>
        </div>
        <p className="text-primary">There are  ## items left</p>
      </div>

    )
  }
}