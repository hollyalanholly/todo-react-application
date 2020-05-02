import React from 'react';
import TaskItem from "./TaskItem/TaskItem"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello Holly!
        </h1>
      </header>

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
