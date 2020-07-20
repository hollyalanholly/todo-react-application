import React, { Fragment, useState } from 'react';
import Bootbox from 'bootbox-react';

import './Header.css';

function Header(props) {

    const date = new Date().toDateString();

    //telling react that some text/date will be inputted and we need to keep track of and use that text/date.
    //calling ("") as there may be nothing written in input TODO box yet
    const [text, setText] = useState("");
    // const [currentDueDate, setCurrentDueDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("");

    //onChange is used so everytime the text input field changes react will update this STATE
    function handleTextChange(event) {
        setText(event.target.value);
    }

    function handleDateChange(event) {
        setDueDate(event.target.value);
    }

    // function handleDateChange(event) {
    //     setCurrentDueDate(event.target.value);
    // }

    function handlePriority(event) {
        setPriority(event.target.value);
    }

    function handleAddTaskClick() {
        props.addTask(text, dueDate, priority);
    }

    //This bit of code is for the pop up alert box
    const [showAlert_add, setShowAlert_add] = useState(false)
    const handleClose_add = () => {
        console.log("You tots closed that ALERT man!");
        return setShowAlert_add(false);
    }
    //end of pop up alert box code

    function handleAddClick() {
        // props.triggerEarthquake()
        console.log("A new task has been added")
        setShowAlert_add(true);
        handleAddTaskClick();
        
        // to remove the button from top of screen after pressed
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
                                            type="date"
                                            className="form-control"
                                            placeholder="Due Date"
                                            onChange={handleDateChange}
                                        // value={dueDate}
                                        />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className='col-12 col-md-5'>
                                        <select
                                            className="custom-select md-sm-2"
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
                                            onClick={handleAddClick}
                                        >Add to-do</button>
                                    </div>
                                </div>

                                <div className="earthquake-alert">
                                    <Bootbox show={showAlert_add}
                                        type={"alert"}
                                        message={"You have added a new task below."}
                                        onClose={handleClose_add} />
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