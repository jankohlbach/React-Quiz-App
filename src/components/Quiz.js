import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import AnswerOption from '../components/AnswerOption';
import QuestionCount from '../components/QuestionCount';

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answer={props.answer}
        answerContent={key.content}
        points={key.points}
        onAnswerSelected={props.onAnswerSelected}
      ></AnswerOption>
    )
  }

  return (
    <div className="quiz">
      <div className="card">
        <Question content={props.question}></Question>
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        </div>
      <QuestionCount counter={props.questionId} total={props.questionTotal}></QuestionCount>
    </div>
  )
}

Quiz.propTypes = {
  questionTotal: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  answer: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Quiz;
