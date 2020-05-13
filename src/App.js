import React, { useState } from 'react';


import Header from "./Header/header"
import TaskItem from "./TaskItem/TaskItem"
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
    { text: "Take a secret nap", completed: false, dueDate: "2020-05-07", priority: "low" },
    { text: "Make a white Russian", completed: true, dueDate: "2020-05-01", priority: "doneColor" },
    { text: "Feed children", completed: true, dueDate: "2020-06-07", priority: "doneColor" },
    { text: "Shave little shorts into Jeffery the cat", completed: false, dueDate: "2020-07-07", priority: "low"},
    { text: "Eat Cheese", completed: true, dueDate: "2020-06-07", priority: "doneColor" },
    { text: "Remove and cut up the entire back garden hedge", completed: true, dueDate: "2020-06-07", priority: "doneColor" },
    { text: "Get into bin", completed: true, dueDate: "2020-06-07", priority: "doneColor" }
  ]);

  //making a variable that tells us the date of the last day of this week
  let today = new Date(); //this is todays date and time
  let first = today.getDate() - today.getDay()+1; // First day is the day of the month - the day of the week
  let last = first + 6; // last day is the first day + 6
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();//year in 4 digit format
  let lastDayOfWeek = yyyy +"-" + mm + "-"+last;


  const twTasks = tasks.filter(task => !task.completed && task.dueDate <= lastDayOfWeek);
  // this weeks tasks so looking at if NOT DONE and in a certain date range

  const allActiveTasks = tasks.filter(task => !task.completed);
  //look through array of ALLTASKS and if the task if false keep it

  const doneTasks = tasks.filter(tasks => tasks.completed);

  return (
    <div className="Container">
      <div className="App">
        <Header />
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
