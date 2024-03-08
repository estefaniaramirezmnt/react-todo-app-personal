// Task.js
import React from "react";
import Checkbox from "./Checkbox";

function Task({ name }) {
  return (
    <div className="task">
      <Checkbox />
      <div>
        <span className="task-name">{name}</span>
      </div>
    </div>
  );
}

export default Task;
