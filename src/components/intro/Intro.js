import React from 'react';
import PropTypes from 'prop-types';

function Intro(props) {
  return (
    <div className="intro card">
      <p>Description of how this quiz will work comes here.</p>
      <button onClick={props.onStart}>Start</button>
    </div>
  )
}

Intro.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default Intro;
