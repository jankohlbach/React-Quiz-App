import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={false}
        id={props.points}
        value={props.points}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.points}>{props.answerContent}</label>
    </li>
  )
}

AnswerOption.propTypes = {
  answer: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default AnswerOption;
