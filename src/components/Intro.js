import React from 'react';

function Intro(props) {
  return (
    <div className="intro">
      <p>Description of how it works. Simply press the start button below and answer the following questions. Afterwards you will get the score and find out if you are the born webdeveloper.</p>
      <button onClick={props.onStart}>Start</button>
    </div>
  )
}

export default Intro;
