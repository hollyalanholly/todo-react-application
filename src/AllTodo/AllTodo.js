import React from 'react';
import './AllTodo.css';

function AllTodo(props) {
    return (
        
        <div className="task-item">
            <div className="row">
                <div className="col-12 col-md-8">
                    <p className="task-item_text">{props.text}</p>
                </div>
                <div className="col-12 col-md-2">
                <p className="task-item_text">{props.date}</p>
                </div>
                <div className="col-6 col-md-1">
                    <button type="button" class="btn btn-outline-dark btn-sm">Done</button>
                </div>
                <div className="col-6 col-md-1">
                    <button type="button" class="btn btn-outline-dark btn-sm">Delete</button>
                </div>
            </div>
        </div >
    );
}

export default AllTodo;