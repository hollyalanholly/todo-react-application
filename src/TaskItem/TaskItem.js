import React, { Fragment, useState} from 'react';
//fragemnt is an invisable div
import './TaskItem.css';

function TaskItem(props) {

    function handleDoneClick() {
        // console.log('The done button has been clicked!');
        // console.log(props.id);
        props.completeTask(props.id);
      }

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
                    {!props.completed && 
                    <button 
                    type="button" 
                    className="btn btn-outline-dark"
                    onClick={ handleDoneClick }> done</button>}
                    <button 
                    type="button" 
                    className="btn btn-outline-dark" 
                    onClick={ () =>props.deleteTask(props.id)}> delete </button>
            </div>
        </div>
        </div >
        
    );
}

export default TaskItem;

