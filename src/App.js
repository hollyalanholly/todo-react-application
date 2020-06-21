import React, { useState, useEffect, Fragment } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

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
  // const [tasks, setTasks] = useState([
  //   { text: "Look up isBefore and momentjs.com", completed: false, dueDate: "2020-05-20", priority: "high", id: uuidv4() },
  //   { text: "try and order you lists by date", completed: false, dueDate: "2020-05-20", priority: "high", id: uuidv4() },
  // ]);

  const [tasks, setTasks] = useState();
  useEffect(() => {
    axios.get('https://djlfzi1od5.execute-api.eu-west-2.amazonaws.com/dev/tasks')
      .then(
        response => {
          console.log(response.data);
          setTasks(response.data.tasks);
        })
      .catch(
        (error) => {
          console.log("error fetch data this is the error that request has given", error)
        })
  }, []);
  // //trying to get dates to be sorted in order has to be here else it does not sort the original state above.
  tasks && tasks.sort(function (a, b) {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });
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

  const twTasks = tasks && tasks.filter(task => !task.completed && task.currentDueDate <= lastDayOfWeek);
  // this weeks tasks so looking at if NOT DONE and in a certain date range
  const nwTasks = tasks && tasks.filter(task => !task.completed && task.currentDueDate > lastDayOfWeek
    && task.currentDueDate <= lastDayOfWeekNW);
  // this weeks tasks so looking at if NOT DONE and in a certain date range
  const allActiveTasks = tasks && tasks.filter(task => !task.completed);
  //look through array of ALLTASKS and if the task if false keep it
  const doneTasks = tasks && tasks.filter(task => task.completed);


  //function to delete a task
  function deleteTask(id) {
    //look through all tasks and find where task.todoId===id if it IS === remove that task
     //if it return TRUE it keeps it, if false it removes it
    //then update TASK STATE
    // setTasks(updatedTasks);

    axios.delete('https://djlfzi1od5.execute-api.eu-west-2.amazonaws.com/dev/tasks/18')
      .then(response => {
        const updatedTasks = tasks && tasks.filter(task => task.todoId !== id);
        console.log(response.data);
        setTasks(updatedTasks);
      })
      .then(response => {
        const updatedDeleteFlag = tasks && tasks.map(task => {
          if (task.todoId === id) {
            task.deleted = true;
          }return task;
          });
      })
      .catch(error => {
        console.log("can't delete the task", error)
      })
  }

  function addTask(text, dueDate, priority) {
    //get a copy of the tasks that are aready there, add a new task into this array, update the task state
    const newTask = {
      text: text,
      completed: false,
      currentDueDate: dueDate,
      priority: priority,
      // todoId: uuidv4()
    }
    axios.post('https://djlfzi1od5.execute-api.eu-west-2.amazonaws.com/dev/tasks', newTask)
      .then(
        //If the request is successful, get the task id and add it to the new task object
        (response) => {
          newTask.todoId = response.data.task[0].todoId;
          console.log(newTask);
          const updatedTasks = [...tasks, newTask];
          setTasks(updatedTasks);
          console.log(tasks);
        }
      )
      .catch(error => {
        console.log('Error adding a task', error)
      })
  }

  function completeTask(id) {
    //look through all tasks and find where task.todoId===id, if it is change completed: true, if it IS then add to updated task state
    const updatedTasks = tasks && tasks.map(task => {
      if (task.todoId === id) {
        task.completed = true;
      } return task;
    })
    setTasks(updatedTasks);
  }

  return (
    <div className="Container">
      <div className="App">
        <Header addTask={addTask} />
        <br></br>
        <ThisWeekH />
        <div>
          {twTasks && twTasks.map((tasks) => {
            return <TaskItem
              deleteTask={deleteTask}
              completeTask={completeTask}
              key={tasks.text}
              text={tasks.text}
              dueDate={tasks.currentDueDate}
              completed={tasks.completed}
              priority={tasks.priority}
              id={tasks.todoId} />
          })}
        </div>
        <br></br>
        <br></br>
        <h3>NEXT WEEK's to-do's</h3>
        <div>
          {nwTasks && nwTasks.map((tasks) => {
            return <NextWeek
              deleteTask={deleteTask}
              completeTask={completeTask}
              key={tasks.text}
              text={tasks.text}
              dueDate={tasks.currentDueDate}
              completed={tasks.completed}
              priority={tasks.priority}
              id={tasks.todoId} />
          })}
        </div>
        <br></br>
        <br></br>
        <AllTodoH />
        {allActiveTasks && allActiveTasks.map((tasks) => {
          return <AllTodo
            deleteTask={deleteTask}
            completeTask={completeTask}
            key={tasks.text}
            text={tasks.text}
            dueDate={tasks.currentDueDate}
            completed={tasks.completed}
            priority={tasks.priority}
            id={tasks.todoId} />
        })}
        <div>
        </div>
        <br></br>
        <br></br>
        <DoneH />
        <div>
          {doneTasks && doneTasks.map((tasks) => {
            return <Done
              deleteTask={deleteTask}
              key={tasks.text}
              text={tasks.text}
              completed={tasks.completed}
              priority={tasks.priority}
              id={tasks.todoId} />
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
