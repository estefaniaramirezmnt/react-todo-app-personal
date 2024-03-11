// Task.js
import React, { useState, useEffect, useRef } from "react";
import Checkbox from "./Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Task({ name, done, onToggle, onTrash, onRename }) {
  const [editMode, setEditMode] = useState(false);
  const [tempName, setTempName] = useState(name);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editMode) {
      inputRef.current.focus();
    }
  }, [editMode]);

  const handleEditClick = () => {
    setEditMode((prev) => !prev);
  };

  const handleInputChange = (event) => {
    setTempName(event.target.value);
  };

  const handleInputBlur = () => {
    setEditMode(false);
    onRename(tempName);
  };

  return (
    <div className={"task " + (done ? "done" : "")}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {!editMode && (
        <div>
          <span className="task-name" onClick={handleEditClick}>
            {name}
          </span>
        </div>
      )}
      {editMode && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setEditMode(false);
            if (tempName !== name) {
              onRename(tempName);
            }
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={tempName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </form>
      )}
      <div className="icons-container">
        <button className="trash" onClick={onTrash}>
          <FontAwesomeIcon icon={faTrash} className="trash-icon" />
        </button>
        <button className="edit" onClick={handleEditClick}>
          <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
        </button>
      </div>
    </div>
  );
}

export default Task;
