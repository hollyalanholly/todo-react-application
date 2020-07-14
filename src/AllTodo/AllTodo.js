import React from 'react';
import './AllTodo.css';

function AllTodo(props) {
    return (
        
        <div className={`task-item ${props.priority}`}>
            <div className="row">
                <div className="col-12 col-md-7">
                    <p><strong>{props.text}</strong></p>   
                </div>
                <div className="col-12 col-md-2 dateBox">
                    <p>{new Date(props.dueDate).toDateString()} </p>
                </div>
                <div className="col-12 col-md-3 doneDeleteButtons">
                <button 
                type="button" 
                className="btn btn-outline-dark"
                onClick={ () =>props.completeTask(props.id)}>done</button>
 
                <button 
                type="button" 
                className="btn btn-outline-dark"
                onClick={ () =>props.deleteTask(props.id)}>delete</button>
                </div>
            </div>
        </div >
    );
}

export default AllTodo;