import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
    return (
        <div className="task-item">
            <p className="task-item_text">{ props.text }</p>
            <button className ="task-item_done-button">Done</button>
            <button className = "task-item_delete-button"> Delete</button>
        </div>
    );
}

export default TaskItem;

