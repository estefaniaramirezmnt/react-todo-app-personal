// Task.js
import React from "react";
import Checkbox from "./Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Task({ name, done, onToggle, onTrash }) {
  return (
    <div className={"task " + (done ? "done" : "")}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      <div>
        <span className="task-name">{name}</span>
      </div>
      <div className="icons-container">
        <button className="trash" onClick={onTrash}>
          <FontAwesomeIcon icon={faTrash} className="trash-icon" />
        </button>
      </div>
    </div>
  );
}

export default Task;
