import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Todo GG App</h2>
      <div className="menu">
        <NavLink className={({ isActive }) =>isActive ? "active" : "link"} to="/">Home</NavLink>
        <NavLink className={({ isActive }) =>isActive ? "active" : "link"} to="/tasks">Tasks</NavLink>
        <NavLink className={({ isActive }) =>isActive ? "active" : "link"} to="/priority">Priority</NavLink>
        <NavLink className={({ isActive }) =>isActive ? "active" : "link"} to="/complete">Complete</NavLink>
        <NavLink className={({ isActive }) =>isActive ? "active" : "link"} to="/settings">Settings</NavLink>
      </div>
      
    </div>
  );
}

export default Sidebar;