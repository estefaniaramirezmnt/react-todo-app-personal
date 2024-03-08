// App.js

import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import Typewriter from "typewriter-effect";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    const newTasks = [...tasks, task];
    // [...tasks, task] renders the new task at the end of the list
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <h1>
        <Typewriter
          options={{
            strings: 'Your task list title here!',
            autoStart: true,
            delay: 100,
          }}
        />
      </h1>
      <TaskForm onSubmit={addTask} />
      <Task tasks={tasks} />
    </div>
  );
}

export default App;
