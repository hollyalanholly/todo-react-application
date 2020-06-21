import React, { Fragment, useState } from 'react';

import './Header.css';

function Header(props) {

    const date = new Date().toDateString();

    //telling react that some text/date will be inputted and we need to keep track of and use that text/date.
    //calling ("") as there may be nothing written in input TODO box yet
    const [text, setText] = useState("");
    const [currentDueDate, setCurrentDueDate] = useState("");
    const [priority, setPriority] = useState("");

    //onChange is used so everytime the text input field changes react will update this STATE
    function handleTextChange(event) {
        setText(event.target.value);
    }

    function handleDateChange(event) {
        setCurrentDueDate(event.target.value);
    }

    function handlePriority(event) {
        setPriority(event.target.value);
    }

    function handleAddTaskClick() {
        props.addTask(text, currentDueDate, priority);
    }

    
    return (
        <Fragment>
            <header>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg col-lg-5 header-toggle" id="header">

                            <div className="row header-toggle__row">
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-secondary toggler active">
                                        <input type="radio" name="options" id="option1" /> All to'do's
                                </label>
                                    <label className="btn btn-secondary toggler">
                                        <input type="radio" name="options" id="option2" />Next wk to-do's
                                </label>
                                    <label className="btn btn-secondary toggler">
                                        <input type="radio" name="options" id="option2" defaultChecked />This wk to-do's
                                </label>
                                </div>
                                <br></br>
                            </div>
                            <br></br>
                            <div className="row-2">
                                <h1> Holly's Mega
                            To-do List</h1><br></br>
                            </div>

                            <div className="row-date">
                                <h2><strong>{date}</strong></h2><br></br>
                            </div>


                        </div>

                        <div className="col-lg col-lg-7">
                            <form className="new-todo-container">
                                <div className="row">
                                    <div className='col-12'>
                                        <input
                                            type="text"
                                            className="form-control input-lg"
                                            placeholder="To do..."
                                            onChange={handleTextChange}
                                            value={text} />
                                    </div>
                                </div><br></br>

                                <div className="row">
                                    <div className="col-12 col-md-5">
                                        <input
                                            id="due-date"
                                            type="date"
                                            className="form-control"
                                            placeholder="Due Date"
                                            onChange={handleDateChange}
                                            value={currentDueDate} />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className='col-12 col-md-5'>
                                        <select 
                                        className="custom-select mr-sm-2" 
                                        id="inlineFormCustomSelect"
                                        onChange={handlePriority}
                                        value={priority}>
                                            <option defaultValue>Priority...</option>
                                            <option id="high" value="high">High</option>
                                            <option id="medium" value="medium">Medium</option>
                                            <option id="low" value="low">Low</option>
                                        </select>
                                    </div>

                                </div><br></br>

                                <div className="row">
                                    <div className='col-12 col-md-5 add-button__column'>
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm btn-block"
                                            onClick={handleAddTaskClick}
                                        >Add to-do</button>
                                    </div>
                                </div>
                            </form >

                        </div>


                    </div>
                </div>
            </header>
        </Fragment>

    );
}

export default Header;