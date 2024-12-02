import React, { useState, useEffect } from "react";
import "./Chatbox.css";

const Chatbox = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      const newMessage = { text: input, sender: "sent" };
      setMessages((prev) => [...prev, newMessage]); // Add message locally
      socket.emit("message", input); // Send message to server
      setInput(""); // Clear input field
    }
  };

  useEffect(() => {
    // Listen for messages from the server
    socket.on("receive-message", (data) => {
      const newMessage = { text: data, sender: "received" };
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.off("receive-message"); // Clean up listener
    };
  }, [socket]);

  return (
    <div className="chatbox">
      <div className="chat-area">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()} // Send on Enter key
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
