import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from "./Header/header"
import TaskItem from "./TaskItem/TaskItem"
import NextWeek from "./NextWeek/NextWeek"
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

  const [tasks, setTasks] = useState([
    { text: "Look up isBefore and momentjs.com", completed: false, dueDate: "2020-05-20", priority: "high", id: uuidv4() },
    { text: "try and order you lists by date", completed: false, dueDate: "2020-05-20", priority: "high", id: uuidv4() },
    { text: "Wash Alan", completed: false, dueDate: "2020-05-17", priority: "high", id: uuidv4() },
    { text: "Find the cat", completed: false, dueDate: "2020-05-17", priority: "medium", id: uuidv4() },
    { text: "Take a secret nap", completed: false, dueDate: "2020-05-24", priority: "low", id: uuidv4() },
    { text: "Make a white Russian", completed: true, dueDate: "2020-05-01", priority: "doneColor", id: uuidv4() },
    { text: "Feed children", completed: true, dueDate: "2020-06-07", priority: "doneColor", id: uuidv4() },
    { text: "Shave little shorts into Jeffery the cat", completed: false, dueDate: "2020-07-07", priority: "low", id: uuidv4() },
    { text: "Eat Cheese", completed: true, dueDate: "2020-06-07", priority: "doneColor", id: uuidv4() },
    { text: "Remove and cut up the entire back garden hedge", completed: true, dueDate: "2020-06-07", priority: "doneColor", id: uuidv4() },
    { text: "Get into bin", completed: true, dueDate: "2020-06-07", priority: "doneColor", id: uuidv4() },
    { text: "Buy a reciprocal saw", completed: false, dueDate: "2020-04-29", priority: "medium", id: uuidv4() },
    { text: "Paint woodwork", completed: false, dueDate: "2020-07-29", priority: "low", id: uuidv4() }
  ]);

  //making a variable that tells us the date of the last day of THIS week
  let today = new Date(); //this is todays date and time
  let first = today.getDate() - today.getDay() + 1; // First day is the day of the month - the day of the week
  let last = first + 6; // last day is the first day + 6
  let firstday = new Date(today.setDate(first));
  let lastday = new Date(today.setDate(today.getDate() + 6));
  let dd = String(lastday.getDate()).padStart(2, '0');
  let mm = String(lastday.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = lastday.getFullYear();
  let lastDayOfWeek = yyyy + "-" + mm + "-" + dd;

  //making a variable to tell us the date of the last day of NEXT week
  let lastdayNW = new Date(today.setDate(today.getDate() + 13));
  let ddNW = String(lastdayNW.getDate()).padStart(2, '0');
  let mmNW = String(lastdayNW.getMonth() + 1).padStart(2, '0');
  let yyyyNW = lastdayNW.getFullYear();
  let lastDayOfWeekNW = yyyyNW + "-" + mmNW + "-" + ddNW;


  const twTasks = tasks.filter(task => !task.completed && task.dueDate <= lastDayOfWeek);
  // this weeks tasks so looking at if NOT DONE and in a certain date range

  const nwTasks = tasks.filter(task => !task.completed && task.dueDate > lastDayOfWeek
    && task.dueDate <= lastDayOfWeekNW);
  // this weeks tasks so looking at if NOT DONE and in a certain date range

  const allActiveTasks = tasks.filter(task => !task.completed);
  //look through array of ALLTASKS and if the task if false keep it

  const doneTasks = tasks.filter(task => task.completed);

  //function to delete a task
  function deleteTask(id) {
    //look through all tasks and find where task.id===id
    //if it IS === remove that task
    const updatedTasks = tasks.filter(task => task.id !== id); //if it return TRUE it keeps it, if false it removes it
    //then update TASK STATE
    setTasks(updatedTasks);
  }

  function completeTask(id) {
    //look through all tasks and find where task.id===id, 
    //if it is change completed: true
    //if it IS then add to updated task state
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = true;
      }
      return task;
    })

    setTasks(updatedTasks);
  }

  return (
    <div className="Container">
      <div className="App">
        <Header />
        <br></br>
        <ThisWeekH />
        <div>
          {twTasks.map((tasks) => {
            return <TaskItem
              deleteTask={deleteTask}
              completeTask={completeTask}
              key={tasks.text}
              text={tasks.text}
              dueDate={tasks.dueDate}
              completed={tasks.completed}
              priority={tasks.priority}
              id={tasks.id} />
          })}
          {/* <TaskItem text="feed Jeff" date="01/05/2020" modifier="high" />
          <TaskItem text="be fabulous" date="01/06/2020" modifier="medium" /> */}
        </div>
        <br></br>
        <br></br>
        <h3>NEXT WEEK's to-do's</h3>
        <div>
          {nwTasks.map((tasks) => {
            return <NextWeek
              deleteTask={deleteTask}
              completeTask={completeTask}
              key={tasks.text}
              text={tasks.text}
              dueDate={tasks.dueDate}
              completed={tasks.completed}
              priority={tasks.priority}
              id={tasks.id} />
          })}
        </div>
        <br></br>
        <br></br>
        <AllTodoH />
        {allActiveTasks.map((tasks) => {
          return <AllTodo
            deleteTask={deleteTask}
            completeTask={completeTask}
            key={tasks.text}
            text={tasks.text}
            dueDate={tasks.dueDate}
            completed={tasks.completed}
            priority={tasks.priority}
            id={tasks.id} />
        })}
        <div>
          {/* <AllTodo className="item1" text="feed Jeff" date="01/05/2020" modifier="high" />>
          <AllTodo text="eat some cheese" date="04/06/2020" modifier="low" /> */}
        </div>
        <br></br>
        <br></br>
        <DoneH />
        <div>
          {/* <Done text="Change out of jogging bottoms" date="08/04/2020" modifier="doneColor"/> */}
          {doneTasks.map((tasks) => {
            return <Done
              deleteTask={deleteTask}
              key={tasks.text}
              text={tasks.text}
              completed={tasks.completed}
              priority={tasks.priority}
              id={tasks.id} />
          })}
        </div>
        <br></br>
        <br></br>
        <Footer />
      </div>
    </div>



  );
}

export default App;
