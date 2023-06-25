import React from "react";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <container>
        <div className="d-flex justify-content-center pt-5">
          <Task />
        </div>
        <div className="d-flex justify-content-center">
          <TaskList />
        </div>
      </container>
    </div>
  );
}

export default App;
