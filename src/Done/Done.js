import React from 'react';
import './Done.css';

function Done(props) {
    return (
        
        <div className="task-item done-item">
            <div className="row">
                <div className="col-12 col-md-8">
                <div className={`done-item ${props.modifier}`}>
                    <p className="Done_text">{props.text}</p>
                    </div>
                </div>
                <div className="col-4 col-md-2">
                <div className={`done-item ${props.modifier}`}>
                <p className="Done_text">{props.date}</p>
                </div>
                </div>
                <div className="col-2 col-md-1">
                    <button type="button" class="btn btn-outline-dark btn-sm">Undo</button>
               
                </div>
            </div>
        </div >
    );
}

export default Done;