import React from 'react';
import quizQuestions from './api/quizQuestions.js';
import Quiz from './components/Quiz';
import Intro from './components/Intro';
import Result from './components/Result';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showIntro: true,
      showQuiz: false,
      showResult: false,
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      resultPoints: 0,
    }

    this.handleStart = this.handleStart.bind(this);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while(0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex = currentIndex - 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleStart() {
    this.setState({
      showIntro: false,
    });

    const shuffledAnswerOptions = quizQuestions.map((question) => {
      return this.shuffleArray(question.answers);
    });

    this.setState({
      showQuiz: true,
      counter: 0,
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
    });
  }

  setUserAnswer(answer) {
    let newResultPoints = this.state.resultPoints + parseInt(answer);

    this.setState({
      resultPoints: newResultPoints,
      answer: answer,
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.target.value);

    if(this.state.questionId < quizQuestions.length) {
      setTimeout(() => {
        return this.setNextQuestion();
      }, 300);
    } else {
      setTimeout(() => {
        this.setState({
          showQuiz: false,
          showResult: true,
        });
      }, 300);
    }
  }

  renderResult() {
    return (
      <Result resultPoints={this.state.resultPoints} resultMaxPoints={quizQuestions.length * 2}></Result>
    )
  }

  renderQuiz() {
    return (
      <Quiz
        questionTotal={quizQuestions.length}
        questionId={this.state.questionId}
        question={this.state.question}
        answerOptions={this.state.answerOptions}
        answer={this.state.answer}
        points={this.state.resultPoints}
        onAnswerSelected={this.handleAnswerSelected}
      ></Quiz>
    )
  }

  render() {
    return (
      <div className="app">
        <h1>Webdeveloper Quick-Check</h1>
        <h2>Check out if you are the born webdeveloper</h2>
        {this.state.showIntro ? <Intro onStart={this.handleStart}></Intro> : null}
        {this.state.showQuiz ? this.renderQuiz() : null}
        {this.state.showResult ? this.renderResult() : null}
      </div>
    )
  }
}

export default App;
