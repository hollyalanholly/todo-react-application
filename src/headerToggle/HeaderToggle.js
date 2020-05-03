import React from 'react';
import './HeaderToggle.css';

function HeaderToggle(props) {
    return (
        <div className="row1">
                <div className="header-toggle">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-secondary active">
                        <input type="radio" name="options" id="option1" /> All to'do's
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2" checked />This wk to-do's
                    </label>
                    </div>
                     <br></br>
                    <h1> Holly's Mega
                        To-do List</h1><br></br>
                </div>
              
        </div>
    );
}

export default HeaderToggle;
