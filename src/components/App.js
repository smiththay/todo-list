import React, { Component } from 'react'
import Tasks from './Tasks'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {value: '', taskList: [],
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  //setState

  // componentDidUpdate() {}
  // windowlocalStorage.setItem

  // componentDidMount() {}
  // window.localStorage.getItem
  


  //addTask() {}

    handleChange(e) {
      this.setState({value: e.target.value});
      console.log(this.state.value)
    }
  
    handleSubmit(e) {
      this.setState({taskList: [this.state.value]})
      this.setState({value:''})
      //console.log("submitted")
      //alert('A name was submitted: ' + this.state.value);
      e.preventDefault();
   }

  

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
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder= "Add Task"value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="Submit" value="Submit" />
      </form>
        {/* <input type="text" placeholder="Add Task" /> */}
        {/* <button className="btn btn-light" onClick={this.addTask}><b>Add</b></button> */}
          <Tasks task={this.state.taskList[0]}/>
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