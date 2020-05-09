import React from 'react';
import './NewTodo.css';

function NewTodo(props) {
    return (
        <form className="new-todo-container">
            <div className="row">
                <div className='col-12'>
                    <input type="text" className="form-control" placeholder="To do..." />
                </div>
            </div><br></br>

            <div className="row">
                <div className="col-12 col-md-4">
                    <input id="due-date" type="date" className="form-control" placeholder="Due Date" />
                </div>
                <div className='col-12 col-md-2'>
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Priority...</option>
                        <option id="high" value="1">High</option>
                        <option id="medium" value="2">Medium</option>
                        <option id="low" value="3">Low</option>
                    </select>
                </div>
                <div className='col-12 col-md-6'>
                <button type="button" className="btn btn-secondary btn-sm btn-block">Add to-do</button>
                </div>

            </div><br></br>
        </form >

    );
}

export default NewTodo;