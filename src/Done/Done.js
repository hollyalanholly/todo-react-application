import React from 'react';
import './Done.css';

function Done(props) {
    return (

        <div className="task-item done-item">
            <div className="row">
                <div className="col-9 col-md-9">
                    <div className={`done-item ${props.priority}`}>
                        <p className="Done_text">{props.text}</p>
                    </div>
                </div>
                {/* <div className="col-4 col-md-3">
                    <div className={`done-item ${props.modifier}`}>
                        <p className="Done_text">{props.dueDate}</p>
                    </div>
                </div> */}
                <div className="col-2 col-md-1">
                <button type="button" className="btn btn-outline-dark">undo</button>

                </div>  
            </div>
        </div >
    );
}

export default Done;