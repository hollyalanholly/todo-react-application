import React from 'react';
import TaskItem from "./TaskItem/TaskItem"
import HeaderToggle from "./headerToggle/HeaderToggle"
import NewTodo from "./NewTodo/NewTodo"
import ThisWeekH from "./ThisWeekH/ThisWeekH"
import AllTodo from "./AllTodo/AllTodo"
import AllTodoH from "./AllTodoH/AllTodoH"
import Done from "./Done/Done"
import DoneH from "./DoneH/DoneH"


function App() {
  return (
    <div className="App">
      <div class="row">
      <HeaderToggle/>
      </div>
      <div class="row">
      <NewTodo/>
      </div>
      <ThisWeekH/>
    
      <div>
      <TaskItem className="item1" text="feed Jeff" date="01/05/2020"/>
      <TaskItem text ="drink Wine" date="04/05/2020"/>
      <TaskItem text ="wash Alan" date="04/05/2020"/>
      <TaskItem text ="feed children" date="08/05/2020"/>
      <TaskItem text = "be fabulous" date="01/06/2020"/>

    </div>

      <AllTodoH/>

    <div>
      <AllTodo className="item1" text="feed Jeff" date="01/05/2020"/>
      <AllTodo text ="drink Wine" date="04/05/2020"/>
      <AllTodo text ="wash Alan" date="04/05/2020"/>
      <AllTodo text ="feed children" date="08/05/2020"/>
      <AllTodo text = "be fabulous" date="01/06/2020"/>
      <AllTodo text="shave little shorts into Jeffery the Cat" date="01/06/2020"/>
      <AllTodo text ="eat some cheese" date="04/06/2020"/>
      </div>

      <DoneH/>
      <br></br>
      <div>
      <Done text ="Change out of jogging bottoms" date="08/04/2020"/>
      <Done text = "Eat an Easter Egg" date="01/05/2020"/>
      </div>
    </div>

  );
}

export default App;
