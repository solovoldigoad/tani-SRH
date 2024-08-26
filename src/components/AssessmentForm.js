import React, { useState } from 'react';

function AssessmentForm() {
  const [answers, setAnswers] = useState({});

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question 1</label>
        <input type="text" name="question1" onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AssessmentForm;
