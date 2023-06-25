import React from "react";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className='container'>
          <Task />
          <TaskList />
    </div>
  );
}

export default App;
