import React, { Fragment, useState} from 'react';
//fragemnt is an invisable div
import './TaskItem.css';

function TaskItem(props) {

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
                    {props.completed === false && <button type="button" className="btn btn-outline-dark"
                    onClick={ () =>props.completedTask(props.id)}> done</button>}
                    <button type="button" className="btn btn-outline-dark" 
                    onClick={ () =>props.deleteTask(props.id)}> delete </button>
            </div>
        </div>
        </div >
        
    );
}

export default TaskItem;

