import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  const percentage = Math.round(props.resultPoints / props.resultMaxPoints * 100);
  let resultText = '';

  switch(true) {
    case percentage < 20:
      resultText = 'Not even that good, sorry. Maybe take a look at another job for you...';
      break;

    case percentage < 40:
      resultText = 'Well, if you really wanna do this you have to learn a lot more. Put in a lot of work and maybe you will end as good developer.';
      break;

    case percentage < 60:
      resultText = 'Looks like this could really be something for you. Do more stuff and learn more to become better at all this.';
      break;

    case percentage < 80:
      resultText = 'You are onto something here. Try and learn even more and you will create amazing stuff.';
      break;

    case percentage <= 100:
      resultText = 'Wow, looks like you have the thing to be a good webdeveloper. Keep on hacking the web.';
      break;

    default:
      break;
  }

  return (
    <div className="result card">
      <h2>You reached <span>{props.resultPoints}</span> of <span>{props.resultMaxPoints}</span> points</h2>
      <h2 className="resultPercentage">{percentage}%</h2>
      <p>{resultText}</p>
    </div>
  )
}

Result.propTypes = {
  resultPoints: PropTypes.number.isRequired,
  resultMaxPoints: PropTypes.number.isRequired,
};

export default Result;
