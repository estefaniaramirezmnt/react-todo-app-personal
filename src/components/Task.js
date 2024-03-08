// Task.js
import React from "react";
import Checkbox from "./Checkbox";

function Task({ name, done, onToggle }) {
  return (
    <div className={"task " + (done ? "done" : "")}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      <div>
        <span className="task-name">{name}</span>
      </div>
    </div>
  );
}

export default Task;
