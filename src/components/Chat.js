import React, { useState } from 'react';
import './Chat.css'; // You'll need to create this CSS file

const Chat = () => {
  const [inputValue, setInputValue] = useState('');
  const [conversationHistory, setConversationHistory] = useState([]);

  const handleSendMessage = () => {
    // Send message logic here
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat with AI</h2>
      </div>
      <div className="chat-messages">
        {conversationHistory.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
