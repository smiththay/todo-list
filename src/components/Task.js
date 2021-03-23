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
                        <h4>{this.props.task.string}</h4>
                        <button className="btn btn-success"> completed</button>
                        <button onClick={() => this.props.onDelete(this.props.task.id)} className="btn btn-danger"> delete </button>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Task
