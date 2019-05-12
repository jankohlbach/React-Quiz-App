import React from 'react';
import PropTypes from 'prop-types';
import QuestionCount from '../components/QuestionCount';
import Question from '../components/Question';
import AnswerOption from '../components/AnswerOption';

function Quiz(props) {

  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        questionId={props.questionId}
        answer={props.answer}
        answerContent={key.content}
        answerCategory={key.category}
        onAnswerSelected={props.onAnswerSelected}
      ></AnswerOption>
    )
  }

  return (
    <div className="quiz">
      <Question content={props.question}></Question>
      <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
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
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Quiz;
