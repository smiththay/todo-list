import React, { Component } from 'react'

export class Task extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
    
        return (
            <div>
                <ul className="list-group">
                    <div className="list-group-item d-flex justify-content-between text-center">
                
                        <h5 className={this.props.task.completed ? "text-decoration-line-through text-muted": null}>{this.props.task.taskValue}</h5>
                        
                        <button onClick={() => this.props.onCheck(this.props.task.id)} className={this.props.task.completed ? "btn btn-light" : "btn btn-secondary"}> {this.props.task.completed ? "to be done" : "completed"}</button>

                        <button onClick={() => this.props.onDelete(this.props.task.id)} className="btn btn-danger"> delete </button>

                    </div>
                </ul>
            </div>
        )
    }
}

export default Task
