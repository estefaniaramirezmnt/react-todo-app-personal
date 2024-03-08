// App.js

import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <TaskForm onSubmit={addTask} />
      <Task tasks={tasks} />
    </div>
  );
}

export default App;
