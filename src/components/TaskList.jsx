import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const tasks = useSelector((state) => state.data.submittedData);
    return (
        <div className="d-flex justify-content-center">
            <div className="w-25 pt-5">
                <ul className="list-group">
                    {tasks?.map((task, index) => (
                        <TaskItem
                            item={task}
                            index={index}
                            key={index}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
