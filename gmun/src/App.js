import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <div>
      {/* NavBar will always be displayed */}
      <NavBar />
      
      {/* Render the child route components using Outlet */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
