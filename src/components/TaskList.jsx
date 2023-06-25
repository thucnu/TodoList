import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList() {
  return (
    <div className="w-25 pt-5">
      <ul className="list-group">
        <TaskItem />
      </ul>
    </div>
  );
}
