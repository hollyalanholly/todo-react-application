import React from 'react';
import './Header.css';

function Header(props) {

    const date = new Date().toDateString();

    return (
        <header>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg col-lg-5 header-toggle" id="header">

                        <div className="row header-toggle__row">
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-secondary active">
                                    <input type="radio" name="options" id="option1" /> All to'do's
                                </label>
                                <label className="btn btn-secondary">
                                    <input type="radio" name="options" id="option2" />Next wk to-do's
                                </label>
                                <label className="btn btn-secondary">
                                    <input type="radio" name="options" id="option2" checked />This wk to-do's
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
                                    <input type="text" className="form-control input-lg" placeholder="To do..." />
                                </div>
                            </div><br></br>

                            <div className="row">
                                <div className="col-12 col-md-5">
                                    <input id="due-date" type="date" className="form-control" placeholder="Due Date" />
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className='col-12 col-md-5'>
                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                        <option selected>Priority...</option>
                                        <option id="high" value="1">High</option>
                                        <option id="medium" value="2">Medium</option>
                                        <option id="low" value="3">Low</option>
                                    </select>
                                </div>

                            </div><br></br>

                            <div className="row">
                            <div className='col-12 col-md-5 add-button__column'>
                                    <button type="button" className="btn btn-secondary btn-sm btn-block">Add to-do</button>
                                </div>
                            </div>
                        </form >

                    </div>


                </div>
            </div>
        </header>

    );
}

export default Header;