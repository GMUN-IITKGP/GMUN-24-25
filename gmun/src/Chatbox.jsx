import React, { useState, useEffect, useMemo } from "react";
import "./Chatbox.css";

const Chatbox = ({ socket, messages, setMessages }) => {
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
    console.log("Chatbox mounted");

    // Listen for messages from the server
    const handleMessage = (data) => {
      const newMessage = { text: data, sender: "received" };
      console.log("Received:", data);
      setMessages((prev) => [...prev, newMessage]);
    };

    socket.on("receive-message", handleMessage);

    return () => {
      // Properly clean up all listeners
      socket.off("receive-message", handleMessage); // Remove only this specific handler
      socket.off("connect");
      socket.off("disconnect");
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
