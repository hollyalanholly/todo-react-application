import React from 'react';
import './AllTodo.css';

function AllTodo(props) {
    return (
        
        <div className="task-item all">
            <div className="row">
                <div className="col-12 col-md-8">
                <div className={`task-item ${props.modifier}`}>
                    <p>{props.text}</p>
                    </div>
                </div>
                <div className="col-4 col-md-2">
                    <div className={`task-item ${props.modifier}`}>
                    <p>{props.dueDate}</p>
                    </div>
                </div>
                <div className="col-2 col-md-1">
                    <button type="button" className="btn btn-outline-dark btn-sm">Done</button>
                </div>
                <div className="col-2 col-md-1">
                    <button type="button" className="btn btn-outline-dark btn-sm">Delete</button>
                </div>
            </div>
        </div >
    );
}

export default AllTodo;