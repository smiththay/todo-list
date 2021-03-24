import React, { Component } from 'react'

export class Task extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
    
        return (
            <div>
                <ul className="list-group">
                    <div className="list-group-item d-flex justify-content-between">
                        <div className="col-1 border text-center"></div>

                        <span className={this.props.task.completed ? "text-decoration-line-through": null}>{this.props.task.taskValue}</span>

                        <button onClick={() => this.props.onCheck(this.props.task.id)} className={this.props.task.completed ? "text-decoration-line-through btn btn-success" : "btn btn-success"}> completed</button>

                        <button onClick={() => this.props.onDelete(this.props.task.id)} className="btn btn-danger"> delete </button>

                    </div>
                </ul>
            </div>
        )
    }
}

export default Task
