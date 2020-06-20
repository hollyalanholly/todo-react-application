import React, { Fragment, useState } from 'react';
//fragemnt is an invisable div
import './TaskItem.css';

function TaskItem(props) {

    function handleDoneClick() {
        // console.log('The done button has been clicked!');
        props.completeTask(props.id);
    }

    const [dueDate, setDueDate] = useState("");
    function handleDateChange(event) {setDueDate(event.target.value);}

    return (
        <div className={`task-item ${props.priority}`}>
            <div className="row">
                <div className="col-12 col-md-8">
                    <p>{props.text}</p>
                </div>
                <div className="col-12 col-md-2 dateBox">
                    <input 
                    id="due-date" 
                    type="date" 
                    className="form-control" 
                    defaultValue={props.currentDueDate}
                    />
                </div>
                <div className="col-12 col-md-2 doneDeleteButtons">
                <button
                        type="button"
                        className="btn btn-outline-dark"
                        defaultValue={props.currentDueDate}
                        onChange={handleDateChange}
                        > change date </button>
                    {!props.completed &&
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={handleDoneClick}> done</button>}
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => props.deleteTask(props.id)}> delete </button>
                   
                </div>
            </div>
        </div >

    );
}

export default TaskItem;

