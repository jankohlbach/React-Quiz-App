import React from 'react';
import PropTypes from 'prop-types';

function QuizNavigation(props) {
  return (
    <div className="quiz-navigation">
      <p>Question <span>{props.counter}</span> of <span>{props.total}</span></p>
    </div>
  )
}

QuizNavigation.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuizNavigation;
