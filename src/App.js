import React from 'react';
import TaskItem from "./TaskItem/TaskItem"
import HeaderToggle from "./headerToggle/HeaderToggle"
import NewTodo from "./NewTodo/NewTodo"

function App() {
  return (
    <div className="App">
      <HeaderToggle/>
      <NewTodo/>

      <TaskItem text="feed Jeff"/>
      <TaskItem text ="drink Wine"/>
      <TaskItem text ="wash Alan"/>
      <TaskItem text ="feed children"/>
      <TaskItem text = "be fabulous"/>

      <h4>Nash on then you Radgee!!</h4>
    </div>
  );
}

export default App;
