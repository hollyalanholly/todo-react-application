import React from 'react';
import './AllTodo.css';

function AllTodo(props) {
    return (
        
        <div className={`task-item ${props.priority}`}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <p>{props.text}</p>   
                </div>
                <div className="col-6 col-md-3 dateBox">
                    <input id="due-date" type="date" className="form-control" value={props.dueDate} />
                </div>
                <div className="col-6 col-md-3 doneDeleteButtons">
                <button type="button" className="btn btn-outline-dark">done</button>
 
                <button type="button" className="btn btn-outline-dark">delete</button>
                </div>
            </div>
        </div >
    );
}

export default AllTodo;