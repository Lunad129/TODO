import { useState } from "react";
import "./Tasks.css";

function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  //addTask function
  const addTask = () => {
  if (task === "") return;

  setTasks([...tasks, task]);
  setTask("");
  };


  return (
  <>
  <div className="task-app">
    <h1>Tasks Page</h1>

    <div className="input-box">
      <input 
        type="text" 
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}/>

      <button onClick={addTask} disabled={task === ""}>Add</button>
    </div>
  </div>
  </>  
  );
}

export default Tasks;