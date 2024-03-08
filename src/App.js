// App.js 

import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import Typewriter from "typewriter-effect";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   if (tasks.length === 0) return;
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  // useEffect(() => {
  //   const tasks = JSON.parse(localStorage.getItem("tasks"));
  //   setTasks(tasks || []);
  // }, []);
  // {tasks.map((task, index) => (
  //   <div key={index}>{task.text}</div>
  // ))}
  

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  return (
    <div className="App">
      <h1>
        <Typewriter
          options={{
            strings: 'What are your tasks?',
            autoStart: true,
            delay: 100,
          }}
        />
      </h1>
      <Title />
      <TaskForm onSubmit={addTask} />
      {tasks.map((task, index) => (
        <Task key={index} name={task.name} />
        // <Task {...task}/>
      ))}
    </div>
  );
}

export default App;
