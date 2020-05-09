import React, { useState } from 'react';

import TaskItem from "./TaskItem/TaskItem"
import HeaderToggle from "./headerToggle/HeaderToggle"
import NewTodo from "./NewTodo/NewTodo"
import ThisWeekH from "./ThisWeekH/ThisWeekH"
import AllTodo from "./AllTodo/AllTodo"
import AllTodoH from "./AllTodoH/AllTodoH"
import Done from "./Done/Done"
import DoneH from "./DoneH/DoneH"
import Footer from "./Footer/Footer"

function App() {
  // const tasks = useState() []; //what is that state
  // const setTasks =useState()[1]; //function allows me to update that state

  //Destructuring method, first thing we will store
  //  in a variable called tasks, and second thing willbe stored in a variable called setTasks
  const [ tasks, setTasks ] = useState([
    {text: "Wash Alan", completed: false, dueDate:"2020-06-17"},
    {text: "Find the cat", completed: false, dueDate:"2020-05-17"},
    {text: "Make a white Russian", completed: true, dueDate:"2020-05-07"}
  ]);

  const [ allTasks, allSetTasks ] = useState([
    {text: "Wash Alan", completed: false, dueDate:"2020-06-17"},
    {text: "Find the cat", completed: false, dueDate:"2020-05-17"},
    {text: "Make a white Russian", completed: true, dueDate:"2020-05-07"},
    {text: "Feed children", completed: true, dueDate:"2020-05-07"},
    {text: "Shave little shorts into Jeffery the cat", completed: false, dueDate:"2020-07-07"}
  ]);

  const activeTasks = tasks.filter(task =>!task.completed); 
  //look through array and if the task if false keep it
  
  const allActiveTasks = allTasks.filter(allTasks =>!allTasks.completed); 
  //look through array of ALLTASKS and if the task if false keep it

  const doneTasks = allTasks.filter(allTasks =>allTasks.completed); 
  
  return (
    <div className="Container">
      <div className="App">
        <div className="row">
          <HeaderToggle />
        </div>
        <div className="row">
          <NewTodo />
        </div>
        <br></br>
        <ThisWeekH />
        <div>
          {activeTasks.map((task) => <TaskItem key={ task.text } text={task.text} dueDate={task.dueDate} 
          completed={ task.completed} />)}
          {/* <TaskItem text="feed Jeff" date="01/05/2020" modifier="high" />
          <TaskItem text="drink Wine" date="04/05/2020" modifier="high" />
          <TaskItem text="wash Alan" date="04/05/2020" modifier="low" />
          <TaskItem text="feed children" date="08/05/2020" modifier="medium" />
          <TaskItem text="be fabulous" date="01/06/2020" modifier="medium" /> */}
        </div>
        <br></br>
        <br></br>
        <AllTodoH />
        {allActiveTasks.map((allTasks) => <AllTodo key={ allTasks.text } text={allTasks.text} dueDate={allTasks.dueDate} 
          completed={ allTasks.completed} />)}

        <div>
          {/* <AllTodo className="item1" text="feed Jeff" date="01/05/2020" modifier="high" />
          <AllTodo text="drink Wine" date="04/05/2020" modifier="high" />
          <AllTodo text="wash Alan" date="04/05/2020" modifier="low" />
          <AllTodo text="feed children" date="08/05/2020" modifier="medium" />
          <AllTodo text="be fabulous" date="01/06/2020" modifier="medium" />
          <AllTodo text="shave little shorts into Jeffery the Cat" date="01/06/2020" modifier="low" />
          <AllTodo text="eat some cheese" date="04/06/2020" modifier="low" /> */}
        </div>
        <br></br>
        <br></br>

        <DoneH />
        <br></br>
        <div>
          {/* <Done text="Change out of jogging bottoms" date="08/04/2020" modifier="doneColor"/>
          <Done text="Eat an Easter Egg" date="01/05/2020" modifier="doneColor" /> */}
           {doneTasks.map((allTasks) => <Done key={ allTasks.text } text={allTasks.text}  
          completed={ allTasks.completed} />)}
        </div>
        <br></br>
        <br></br>
        <Footer />
      </div>
    </div>



  );
}

export default App;
