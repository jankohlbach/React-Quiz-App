import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';
import QuizNavigation from './QuizNavigation';

function Quiz(props) {
  const renderAnswer = (answer, index) => {
    return (
      <Answer
        key={index}
        answerId={index}
        selectedAnswer={props.selectedAnswer}
        answerPoints={answer.points}
        answer={answer.content}
        handleChange={props.handleChange}
      />
    )
  }

  return (
    <div className="quiz">
      <div className="card">
        <h2 className="question">{props.question}</h2>
        <ul className="answer-options">{props.answerOptions.map((answer, index) => {return renderAnswer(answer, index)})}</ul>
      </div>
      <QuizNavigation counter={props.questionId} total={props.questionAmount} />
    </div>
  )
}

Quiz.propTypes = {
  question: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  selectedAnswer: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  questionAmount: PropTypes.number.isRequired,
};

export default Quiz;
