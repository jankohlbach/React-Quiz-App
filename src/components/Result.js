import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="result">
      <h2>{props.resultCategory}</h2>
      <p>{props.resultText}</p>
    </div>
  )
}

Result.propTypes = {
  resultCategory: PropTypes.string.isRequired,
  resultText: PropTypes.string.isRequired,
};

export default Result;
