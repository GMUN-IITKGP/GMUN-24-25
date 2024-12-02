import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';



const App = () => {
  return (
    <div>
      {/* Navbar will always be displayed */}
      <NavBar />

      {/* Render the child route components using Outlet */}
      <div>
        <Outlet />
      </div>

    </div>
  );
};

export default App;
