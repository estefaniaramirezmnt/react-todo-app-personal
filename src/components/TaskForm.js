// TaskForm.js

import React, {useState} from "react";

function TaskForm( {onSubmit} ) {
  const [individualTask, setIndividualTask] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ text: individualTask }); // Envía el objeto task a la función onSubmit
    setIndividualTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a task" 
        className="task-input" 
        value={individualTask}
        onChange={(e) => setIndividualTask(e.target.value)}
      />
      <button className="button-add" type="submit">
        +
      </button>
    </form>
  );
}

export default TaskForm;
