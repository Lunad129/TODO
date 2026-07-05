import { useState } from "react";
import "./Tasks.css";

//icons
import { FiPlus } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function Tasks() {

  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");

  //functions all

  //important/ priority
  const toggleImportant = (index) => {
  const updatedTasks = [...tasks];

  updatedTasks[index].important = !updatedTasks[index].important;

  setTasks(updatedTasks);
};

  //complete not complete
  const toggleComplete = (index) => {
  const updatedTasks = [...tasks];

  updatedTasks[index].completed = !updatedTasks[index].completed;

  setTasks(updatedTasks);
};

  //edit function
  const editTask = (index) => {
    setTask(tasks[index].text);
    setDueDate(tasks[index].dueDate || "");
    setEditIndex(index);
  };
//cancel edit function
  const cancelEdit = () => {
    setEditIndex(null);
    setTask("");
    setDueDate("");
  };
  //addTask function

  const addTask = () => {
  if (task === "") return;

  if (editIndex !== null) {
    const updatedTasks = [...tasks];
    
    updatedTasks[editIndex].text = task;
    updatedTasks[editIndex].dueDate = dueDate;
    setTasks(updatedTasks);
    setEditIndex(null);   // exit edit mode
    setTask("");          // clear input
    setDueDate("");       // clear due date
    return;               // stop here
  }

  setTasks([...tasks, {
        text: task,
        completed: false,
        important: false,
        dueDate: dueDate
  }]);
  setTask("");
  setDueDate("");
  };

  //deleteTask function
  const deleteTask = (index) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this task?");
  if (!confirmDelete) return;
  const newTasks = tasks.filter((_, i) => i !== index);
  setTasks(newTasks);
};

  //search function  
  const filteredTasks = search.trim() === ""
      ? tasks
      : tasks.filter((t) =>
          t.text.toLowerCase().includes(search.toLowerCase())
        );


  return (
  <>
  <div className="task-app">

    <h1 className="head">Tasks</h1>

    <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
    </div>
    

    <div className="input-box">
      <input 
        type="text" 
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {if (e.key === "Enter") {addTask();}
      }}/>

      <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
      />

      <button className="add-button" onClick={addTask} disabled={task === ""}><FiPlus /></button>
      {editIndex !== null && (
          <button onClick={cancelEdit} className="cancel-button"><FaTimes /></button>
      )}
    </div>
    
    <div className="task-container">
        {filteredTasks.map((t, index) => (
          <div key={index} className="task-card">
              <div>
                  {t.text}

                  {t.dueDate && (
                    <small className="due-date">
                      📅 Due: {t.dueDate}
                    </small>
                  )}
              </div>
              <div className="task-actions">
                {editIndex === index ? 
                   (<FiPlus className="icon save-icon" onClick={addTask}/>) :
                   (<FaEdit className="icon edit-icon" onClick={() => editTask(index)}/>)
                }
                <FaTrash className="icon delete-icon" onClick={() => deleteTask(index)}/>
                <input 
                  type="checkbox" 
                  checked={t.completed} 
                  onChange={() => toggleComplete(index)} 
                />
                <div className="star-icon" onClick={() => toggleImportant(index)}>
                      {t.important ? (<FaStar color="gold" />) : (<FaRegStar />)}
                </div>
              </div>
          </div>
      ))}
    </div>
  </div>
  </>  
  );
}

export default Tasks;