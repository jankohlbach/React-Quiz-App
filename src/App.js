import React from 'react';
import quizQuestions from './api/quizQuestions.js';
import Intro from './components/intro/Intro';
import Quiz from './components/quiz/Quiz';
import Result from './components/result/Result';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizState: 'intro',
      questionId: 1,
      selectedAnswer: undefined,
      resultPoints: 0,
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleStart() {
    this.setState({
      quizState: 'quiz',
    });
  }

  setSelectedAnswer(answer) {
    const newSelectedAnswer = answer.points;

    this.setState({
      selectedAnswer: newSelectedAnswer,
    })
  }

  calculatePoints(answer) {
    const newResultPoints = this.state.resultPoints + answer.points;

    this.setState({
      resultPoints: newResultPoints,
    });
  }

  setNextQuestion() {
    const newQuestionId = this.state.questionId + 1;

    this.setState({
      questionId: newQuestionId,
      selectedAnswer: undefined,
    });
  }

  handleChange(event) {
    const answer = quizQuestions[this.state.questionId - 1].answers[event.target.id];
    this.setSelectedAnswer(answer);
    this.calculatePoints(answer);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => {
        return this.setNextQuestion();
      }, 500);
    } else {
      setTimeout(() => {
        this.setState({
          quizState: 'result',
        });
      }, 500);
    }
  }

  calculateMaxPoints() {
    let maxPoints = 0;

    quizQuestions.forEach((question) => {
      const pointsArray = question.answers.map((answer) => {
        return answer.points;
      });
      maxPoints = maxPoints + Math.max.apply(null, pointsArray);
    });

    return maxPoints;
  }

  renderQuizState() {
    switch(this.state.quizState) {
      case 'intro':
        return <Intro onStart={this.handleStart} />;
      case 'quiz':
        return (
          <Quiz
            question={quizQuestions[this.state.questionId - 1].question}
            answerOptions={quizQuestions[this.state.questionId - 1].answers}
            selectedAnswer={this.state.selectedAnswer}
            handleChange={this.handleChange}
            questionId={this.state.questionId}
            questionAmount={quizQuestions.length}
          />
        )
      case 'result':
        return <Result resultPoints={this.state.resultPoints} resultMaxPoints={this.calculateMaxPoints()} />
      default:
        return <h3>huh, something's wrong here...</h3>;
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Quiz App</h1>
        <h2>Subheadline, can be way longer</h2>
        {this.renderQuizState()}
      </div>
    )
  }
}

export default App;
