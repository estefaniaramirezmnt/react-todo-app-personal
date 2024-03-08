import React, {useState} from "react";

function TaskForm() {
  const [task, setTask] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a task" 
        className="task-input" 
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="button-add" type="submit">
        +
      </button>
    </form>
  );
}

export default TaskForm;
