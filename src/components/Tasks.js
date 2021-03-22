import React, { Component } from 'react'

export class Tasks extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    <div className="list-group-item d-flex justify-content-between">
                        <div className="col-1 border text-center" onClick='null' ></div>
                        <h4>{this.props.task}</h4>
                        <button onClick='null' className="btn btn-success"> completed</button>
                        <button onClick='null' className="btn btn-danger"> delete </button>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Tasks
