import React from 'react';

function Intro(props) {
  return (
    <div className="intro">
      <p>Description of how it works. Should appear on load and then disappear for the first question.</p>
      <button onClick={props.onStart}>Start the test</button>
    </div>
  )
}

export default Intro;
