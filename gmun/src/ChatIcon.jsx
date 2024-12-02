import React from "react";
import "./ChatIcon.css";

const ChatIcon = ({ onClick }) => (
  <div className="chat-icon" onClick={onClick}>
    💬
  </div>
);

export default ChatIcon;
