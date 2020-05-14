import React from 'react';
import './AllTodo.css';

function AllTodo(props) {
    return (
        
        <div className={`task-item ${props.priority}`}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <p>{props.text}</p>   
                </div>
                <div className="col-6 col-md-3">
                    <input id="due-date" type="date" className="form-control" value={props.dueDate} />
                </div>
                <div className="col-6 col-md-3">
                <button type="button" className="btn btn-secondary">done</button>
 
                <button type="button" className="btn btn-secondary">delete</button>
                </div>
            </div>
        </div >
    );
}

export default AllTodo;