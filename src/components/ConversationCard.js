import React from 'react';
import Feedback from './Feedback';

const ConversationCard = ({ conversation, onClick, isActive }) => {
  return (
    <div
      className={`conversation-card ${isActive ? 'active' : ''}`}
      onClick={() => onClick(conversation)}
    >
      <h2>{conversation.question}</h2>
      <p>{conversation.response}</p>
      <Feedback feedback={conversation.feedback} />
    </div>
  );
};

export default ConversationCard;