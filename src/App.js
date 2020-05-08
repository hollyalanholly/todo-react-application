import React from 'react';
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
  return (
    <div className="Container">
      <div className="App">
        <div class="row">
          <HeaderToggle />
        </div>
        <div class="row">
          <NewTodo />
        </div>
        <br></br>
        <ThisWeekH />

        <div>
          <TaskItem className="item1" text="feed Jeff" date="01/05/2020" modifier="high" />
          <TaskItem text="drink Wine" date="04/05/2020" modifier="high" />
          <TaskItem text="wash Alan" date="04/05/2020" modifier="low" />
          <TaskItem text="feed children" date="08/05/2020" modifier="medium" />
          <TaskItem text="be fabulous" date="01/06/2020" modifier="medium" />

        </div>
        <br></br>
        <br></br>

        <AllTodoH />

        <div>
          <AllTodo className="item1" text="feed Jeff" date="01/05/2020" modifier="high" />
          <AllTodo text="drink Wine" date="04/05/2020" modifier="high" />
          <AllTodo text="wash Alan" date="04/05/2020" modifier="low" />
          <AllTodo text="feed children" date="08/05/2020" modifier="medium" />
          <AllTodo text="be fabulous" date="01/06/2020" modifier="medium" />
          <AllTodo text="shave little shorts into Jeffery the Cat" date="01/06/2020" modifier="low" />
          <AllTodo text="eat some cheese" date="04/06/2020" modifier="low" />
        </div>
        <br></br>
        <br></br>

        <DoneH />
        <br></br>
        <div>
          <Done text="Change out of jogging bottoms" date="08/04/2020" modifier="doneColor"/>
          <Done text="Eat an Easter Egg" date="01/05/2020" modifier="doneColor" />
        </div>
        <br></br>
        <br></br>
        <Footer />
      </div>
    </div>



  );
}

export default App;
