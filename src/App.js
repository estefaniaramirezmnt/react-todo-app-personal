import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  }
  
  return (
    <div className="App">
     <h1>Hello world</h1>
     <TaskForm onSubmit={addTask}/>
    </div>
  );
}

export default App;
