import React from 'react';
import PropTypes from 'prop-types';

function Answer(props) {
  return (
    <li className="answer-option">
      <input
        type="radio"
        name="radio-group"
        id={props.answerId}
        checked={props.selectedAnswer === props.answerPoints}
        onChange={props.handleChange}
      />
      <label htmlFor={props.answerId}>
        <span></span>
        {props.answer}
      </label>
    </li>
  )
}

Answer.propTypes = {
  answerId: PropTypes.number.isRequired,
  selectedAnswer: PropTypes.number,
  answerPoints: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Answer;
