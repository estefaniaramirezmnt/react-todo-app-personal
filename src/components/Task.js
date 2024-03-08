// Task.js
import React from "react";
import Checkbox from "./Checkbox";

function Task({ name }) {
  return (
    <div>
        <Checkbox />
        <span>{name}</span>
    </div>
  )
}

export default Task;
