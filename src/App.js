import React from 'react';
import quizQuestions from './api/quizQuestions.js';
import results from './api/results.js';
import Quiz from './components/Quiz';
import Intro from './components/Intro';
import Result from './components/Result';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showIntro: true,
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        clueless: 0,
        beginner: 0,
        advanced: 0,
        expert: 0,
      },
      result: '',
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
      counter: 0,
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
    });
  }

  setUserAnswer(answer) {
    const newAnswerCount = this.state.answersCount;
    newAnswerCount[answer] = this.state.answersCount[answer] + 1;

    this.setState({
      answersCount: newAnswerCount,
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

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => {
      return answersCount[key];
    });
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => {
      return answersCount[key] === maxAnswerCount;
    });
  }

  setResults(result) {
    if(result.length === 1) {
      this.setState({
        result: result[0],
      });
    } else {
      this.setState({
        result: 'Undetermined',
      });
    }
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.target.value);

    if(this.state.questionId < quizQuestions.length) {
      setTimeout(() => {
        return this.setNextQuestion();
      }, 300);
    } else {
      setTimeout(() => {
        return this.setResults(this.getResults());
      }, 300);
    }
  }

  renderResult() {
    return (
      <Result resultCategory={this.state.result} resultText={results[this.state.result]}></Result>
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
        onAnswerSelected={this.handleAnswerSelected}
      ></Quiz>
    )
  }

  render() {
    const showQuiz = !this.state.showIntro && !this.state.result;

    return (
      <div className="app">
        <h1>Webdeveloper Quick-Check</h1>
        <h2>Check out if you are the born webdeveloper</h2>
        {this.state.showIntro ? <Intro onStart={this.handleStart}></Intro> : null}
        {showQuiz ? this.renderQuiz() : null}
        {this.state.result ? this.renderResult() : null}
      </div>
    )
  }
}

export default App;
