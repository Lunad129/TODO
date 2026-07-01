import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Priority from "./pages/Priority";
import Complete from "./pages/Complete";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/priority" element={<Priority />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;