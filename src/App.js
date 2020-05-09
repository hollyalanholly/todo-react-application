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

  const [tasks, SetTasks] = useState([
    { text: "Wash Alan", completed: false, dueDate: "2020-05-17", priority: "high" },
    { text: "Find the cat", completed: false, dueDate: "2020-05-17", priority: "medium" },
    { text: "Make a white Russian", completed: true, dueDate: "2020-05-01", priority: "doneColor" },
    { text: "Feed children", completed: true, dueDate: "2020-06-07", priority: "doneColor" },
    { text: "Shave little shorts into Jeffery the cat", completed: false, dueDate: "2020-07-07", priority: "low"},
    { text: "Eat Cheese", completed: true, dueDate: "2020-06-07", priority: "doneColor" },
    { text: "Remove and cut up the entire back garden hedge", completed: true, dueDate: "2020-06-07", priority: "doneColor" },
    { text: "Get into bin", completed: true, dueDate: "2020-06-07", priority: "doneColor" }
  ]);

  const twTasks = tasks.filter(task => !task.completed && task.dueDate < "2020-05-18");
  // this weeks tasks so looking at if NOT DONE and in a certain date range

  const allActiveTasks = tasks.filter(task => !task.completed);
  //look through array of ALLTASKS and if the task if false keep it

  const doneTasks = tasks.filter(tasks => tasks.completed);

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
          {twTasks.map((tasks) => <TaskItem key={tasks.text} text={tasks.text} dueDate={tasks.dueDate}
            completed={tasks.completed} priority={tasks.priority} />)}
          {/* <TaskItem text="feed Jeff" date="01/05/2020" modifier="high" />
          <TaskItem text="be fabulous" date="01/06/2020" modifier="medium" /> */}
        </div>
        <br></br>
        <br></br>
        <AllTodoH />
        {allActiveTasks.map((tasks) => <AllTodo key={tasks.text} text={tasks.text} dueDate={tasks.dueDate}
          completed={tasks.completed} priority={tasks.priority} />)}
        <div>
          {/* <AllTodo className="item1" text="feed Jeff" date="01/05/2020" modifier="high" />>
          <AllTodo text="eat some cheese" date="04/06/2020" modifier="low" /> */}
        </div>
        <br></br>
        <br></br>
        <DoneH />
        <div>
          {/* <Done text="Change out of jogging bottoms" date="08/04/2020" modifier="doneColor"/> */}
          {doneTasks.map((allTasks) => <Done key={allTasks.text} text={allTasks.text}
            completed={allTasks.completed} priority={allTasks.priority} />)}
        </div>
        <br></br>
        <br></br>
        <Footer />
      </div>
    </div>



  );
}

export default App;
