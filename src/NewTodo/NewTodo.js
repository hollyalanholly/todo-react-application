import React from 'react';
import './NewTodo.css';

function NewTodo(props) {
    return (
        <form>
            <div class="row-1">
                <div class="col-12">
                     <label for="to-do"> To-do:
                     <input id="to-do" type="text" className="form-control" placeholder="To Do"/> 
                    </label>
                </div>
                <div class="col-auto">
                        <label for="due-date">Due date:
                        <input id="due-date" type="date" className="form-control" placeholder="Due Date"/>
                        </label><br></br>
                    </div>
                    <div class='col-auto'>
                        <label for="priority">Priority:
                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option id="high" value="1">High</option>
                            <option id="medium" value="2">Medium</option>
                            <option id="low" value="3">Low</option>
                        </select>
                        </label><br></br>
                    </div>
            
                    <div class='col-auto'>
                        <input type="submit" id="submit" value="Add to-do"/> 
                    </div>
            </div>
        </form>
     
        
    );
}

export default NewTodo;