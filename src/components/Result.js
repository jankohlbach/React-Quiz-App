import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="result">
      <h2>{props.resultPoints} of {props.resultMaxPoints} points</h2>
    </div>
  )
}

Result.propTypes = {
  resultPoints: PropTypes.number.isRequired,
  resultMaxPoints: PropTypes.number.isRequired,
};

export default Result;
