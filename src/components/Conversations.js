import React, { useState, useEffect } from 'react';
import conversationsData from './conversations.json';
import ConversationCard from './ConversationCard';

const Conversations = () => {
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);

  useEffect(() => {
    try {
      setConversations(conversationsData.conversations);
    } catch (error) {
      console.error('Error fetching conversations:', error);
      // You can also display an error message to the user here
    }
  }, []);

  const handleConversationClick = (conversation) => {
    setActiveConversation(conversation);
  };

  return (
    <div className="conversation-list">
      {conversations.map((conversation) => (
        <ConversationCard
          key={conversation.id}
          conversation={conversation}
          onClick={handleConversationClick}
          isActive={activeConversation === conversation}
        />
      ))}
    </div>
  );
};

export default Conversations;