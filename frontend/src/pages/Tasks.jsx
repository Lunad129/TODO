import { useState } from "react";
import "./Tasks.css";
import { FiPlus } from "react-icons/fi";
import { FaEdit, FaTrash,FaCheck  } from "react-icons/fa";

function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
 

  //edit function
  const editTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  //addTask function

  const addTask = () => {
  if (task === "") return;

  if (editIndex !== null) {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = task;
    setTasks(updatedTasks);
    setEditIndex(null);   // exit edit mode
    setTask("");          // clear input
    return;               // stop here
  }

  setTasks([...tasks, task]);
  setTask("");
  };

  //deleteTask function
  const deleteTask = (index) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this task?");
  if (!confirmDelete) return;
  const newTasks = tasks.filter((_, i) => i !== index);
  setTasks(newTasks);
};
  
  
  return (
  <>
  <div className="task-app">
    <h1 className="head">Tasks</h1>

    <div className="input-box">
      <input 
        type="text" 
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {if (e.key === "Enter") {addTask();}
      }}/>

      <button className="add-button" onClick={addTask} disabled={task === ""}><FiPlus /></button>
      

    </div>
    
    <div className="task-container">
        {tasks.map((t, index) => (
          <div key={index} className="task-card">
              {t}
              <div className="task-actions">
                {editIndex === index ? 
                   (<FaCheck className="icon save-icon" onClick={addTask}/>) :
                   (<FaEdit className="icon edit-icon" onClick={() => editTask(index)}/>)
                }
                <FaTrash className="icon delete-icon" onClick={() => deleteTask(index)}/>
              </div>
          </div>
      ))}
    </div>
  </div>
  </>  
  );
}

export default Tasks;