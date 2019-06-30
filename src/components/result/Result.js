import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
  componentDidMount() {
    const percentage = Math.round(this.props.resultPoints / this.props.resultMaxPoints * 100);
    const node = document.querySelector('.result .result-percentage span');

    for (let i = 0; i <= percentage; i++) {
      ((number) => {
        setTimeout(() => {
          node.innerHTML = number;
        }, number * 10);
      })(i);
    }
  }

  render() {
    return (
      <div className="result card">
        <h2>You reached <span>{this.props.resultPoints}</span> of <span>{this.props.resultMaxPoints}</span> points</h2>
        <h2 className="result-percentage"><span>0</span>%</h2>
        <p>Result description</p>
      </div>
    )
  }
}

Result.propTypes = {
  resultPoints: PropTypes.number.isRequired,
  resultMaxPoints: PropTypes.number.isRequired,
};

export default Result;
