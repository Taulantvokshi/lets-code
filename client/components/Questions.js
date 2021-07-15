import React from 'react';

const Questions = ({ selectedQuestion }) => {
  return (
    <div className="questions">
      <p>{selectedQuestion} </p>
    </div>
  );
};

export default Questions;
