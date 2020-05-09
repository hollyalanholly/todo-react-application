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
                {/* <div className="col-4 col-md-3">
                    <div className={`done-item ${props.modifier}`}>
                        <p className="Done_text">{props.dueDate}</p>
                    </div>
                </div> */}
                <div className="col-1 col-md-1">
                    <button type="button" className="btn btn-outline-dark btn-sm">Undo</button>

                </div>  
            </div>
        </div >
    );
}

export default Done;