import React, { useState, useEffect } from 'react';

const Quiz = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 300 วินาที (5 นาที)

  useEffect(() => {
    if (!submitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [submitted, timeLeft]);

  const handleAnswerChange = (index, value) => {
    if (!submitted) {
      const newAnswers = [...userAnswers];
      newAnswers[index] = value;
      setUserAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    if (!submitted) {
      const newScore = userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
      setScore(newScore);
      setSubmitted(true);
    }
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-question">Quiz: Fundamental KidBright</h2>
      <form>
        {questions.map((question, index) => (
          <div key={index}>
            <p className="quiz-question">{question.question}</p>
            <div className="quiz-options">
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex} className="quiz-option-label">
                  <input
                    type="radio"
                    value={option}
                    checked={userAnswers[index] === option}
                    onChange={() => handleAnswerChange(index, option)}
                    disabled={submitted}
                    className="quiz-option-input"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        {!submitted && (
          <button type="button" onClick={handleSubmit} className="quiz-submit-button">
            Submit
          </button>
        )}
      </form>
      {submitted && (
        <div>
          <p>Your Score: {score} out of {questions.length}</p>
          <p>Assessment submitted.</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;