import React from 'react';
import './NewTodo.css';

function NewTodo(props) {
    return (
        
            <form className="new-todo-container">
                <div class="row">
                    <div className="col-auto">
                        <label for="to-do"> To-do:
                     <input type="text" class="form-control" placeholder="Todo..." />
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label for="due-date">Due date:
                        <input id="due-date" type="date" class="form-control" placeholder="Due Date" />
                        </label><br></br>
                    </div>
                    <div className='col-12 col-md-6'>
                        <label for="priority">Priority:
                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option id="high" value="1">High</option>
                                <option id="medium" value="2">Medium</option>
                                <option id="low" value="3">Low</option>
                            </select>
                        </label><br></br>
                    </div>
                    <div className="row">
                        <div className='col-12'>
                            <input type="submit" id="submit" value="Add to-do" />
                        </div>
                    </div>
                </div>
            </form>
        
    );
}

export default NewTodo;