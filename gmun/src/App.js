import React, { useState, useEffect, useMemo } from "react";
import { io } from "socket.io-client";
import Chatbox from "./Chatbox";
import ChatIcon from "./ChatIcon";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // Toggle Chatbox visibility
  const socket = useMemo(() => io("http://localhost:3000", { withCredentials: true }), []);

  useEffect(() => {
    // Clean up the socket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div>
      {/* Navbar will always be displayed */}
      <NavBar />

      {/* Render the child route components using Outlet */}
      <div>
        <Outlet />
      </div>
      <div className="App">
        {isChatOpen && <Chatbox socket={socket} />}
        <ChatIcon onClick={toggleChat} />
      </div>

    </div>
  );
};

export default App;
