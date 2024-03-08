// Task.js
import React from 'react';

function Task({ tasks }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>{task.text}</div>
      ))}
    </div>
  );
}

export default Task;
