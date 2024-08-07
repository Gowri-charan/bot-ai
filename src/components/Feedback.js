import React from 'react';

const Feedback = ({ feedback }) => {
  return (
    <div className="feedback">
      <p>Rating: {feedback.rating}</p>
      <p>Subjective Feedback: {feedback.subjectiveFeedback}</p>
    </div>
  );
};

export default Feedback;