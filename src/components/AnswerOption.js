import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerCategory === props.answer}
        id={props.answerCategory}
        value={props.answerCategory}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerCategory}>{props.answerContent}</label>
    </li>
  )
}

AnswerOption.propTypes = {
  answer: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answerCategory: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default AnswerOption;
