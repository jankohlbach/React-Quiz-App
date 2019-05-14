import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  const percentage = Math.round(props.resultPoints / props.resultMaxPoints * 100);
  let resultText = '';

  switch(true) {
    case percentage < 20:
      resultText = '0% - 19%';
      break;

    case percentage < 40:
      resultText = '20% - 39%';
      break;

    case percentage < 60:
      resultText = '40% - 59%';
      break;

    case percentage < 80:
      resultText = '60% - 79%';
      break;

    case percentage <= 100:
      resultText = '80% - 100%';
      break;

    default:
      break;
  }

  return (
    <div className="result">
      <h2>{props.resultPoints} of {props.resultMaxPoints} points</h2>
      <h2>{percentage}%</h2>
      <p>{resultText}</p>
    </div>
  )
}

Result.propTypes = {
  resultPoints: PropTypes.number.isRequired,
  resultMaxPoints: PropTypes.number.isRequired,
};

export default Result;
