import React from 'react';
import './NextWeek.css';

function NextWeek(props) {
    return (
        <div className={`task-item ${props.priority}`}>
            <div className="row">
                <div className="col-12 col-md-8">
                    <p>{props.text}</p>
                </div>
                <div className="col-6 col-md-2 dateBox">
                    <input id="due-date" type="date" className="form-control" value={props.dueDate} />
                </div>
                <div className="col-6 col-md-2 doneDeleteButtons">
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
        </div>
    );
}

export default NextWeek;