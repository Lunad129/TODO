import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Todo GG App</h2>
      <div className="menu">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/tasks">Tasks</Link>
        <Link className="link" to="/priority">Priority</Link>
        <Link className="link" to="/complete">Complete</Link>
        <Link className="link" to="/settings">Settings</Link>
      </div>
      
    </div>
  );
}

export default Sidebar;