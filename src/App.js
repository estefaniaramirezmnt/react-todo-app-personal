// App.js

import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import Typewriter from "typewriter-effect";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(storageTasks || []);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  function removeTask(taskIndex) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks.splice(taskIndex, 1);
      return newTasks;
    });
  }

  function renameTask(taskIndex, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].name = newName;
      return newTasks;
    });
  }

  return (
    <main>
      <h1>
        <Typewriter
          options={{
            strings: "What are your tasks?",
            autoStart: true,
            delay: 100,
          }}
        />
      </h1>
      <Title />
      <TaskForm onSubmit={addTask} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          name={task.name}
          done={task.done}
          onTrash={() => removeTask(index)}
          onToggle={(done) => updateTaskDone(index, done)}
          onRename={(newName) => renameTask(index, newName)}
        />
        // <Task {...task}/>
      ))}
    </main>
  );
}

export default App;
