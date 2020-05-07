import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
    return (
        
        <div className="task-item">
            <div className="row">
                <div className="col-12 col-md-8">
                <div className={`task-item ${props.modifier}`}>
                    <p>{props.text}</p>
                    </div>
                </div>
                <div className="col-12 col-md-2">
                <div className={`task-item ${props.modifier}`}>
                    <p>{props.date}</p>
                    </div>
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

export default TaskItem;

