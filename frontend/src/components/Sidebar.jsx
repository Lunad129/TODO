import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import { FaTasks } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdCheckBox} from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Todo GG App</h2>
      <div className="menu">

        <NavLink className={({ isActive }) =>isActive ? "active" : "link"} to="/">
          <FaTasks /> Tasks
        </NavLink>
        <NavLink className={({ isActive }) =>isActive ? "active" : "link"} to="/priority">
          <FaStar /> Priority
        </NavLink>
        <NavLink className={({ isActive }) =>isActive ? "active" : "link"} to="/complete">
          < MdCheckBox/> Complete
        </NavLink>
        <NavLink className={({ isActive }) =>isActive ? "active" : "link"} to="/settings">
          <IoSettingsOutline /> Settings
        </NavLink>
      </div>
      
    </div>
  );
}

export default Sidebar;