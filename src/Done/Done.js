import React from 'react';
import './Done.css';

function Done(props) {
    return (
        
        <div className="done-items">
            <div className="row">
                <div className="col-12 col-md-8">
                    <p className="Done_text">{props.text}</p>
                </div>
                <div className="col-12 col-md-2">
                <p className="Done_text">{props.date}</p>
                </div>
                <div className="col-6 col-md-1">
                    <button type="button" class="btn btn-outline-dark btn-sm">Undo</button>
                </div>
            </div>
        </div >
    );
}

export default Done;