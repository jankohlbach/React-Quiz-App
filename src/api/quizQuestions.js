// questions for the quiz are here, answers get shuffled at end of this file
const quizQuestions = [
  {
    question: 'Question 1',
    answers: [
      {
        points: 0,
        content: 'Answer 1',
      },
      {
        points: 1,
        content: 'Answer 2',
      },
      {
        points: 2,
        content: 'Answer 3',
      },
    ],
  },
  {
    question: 'Question 2',
    answers: [
      {
        points: 0,
        content: 'Answer 1',
      },
      {
        points: 2,
        content: 'Answer 2',
      },
    ],
  },
  {
    question: 'Question 3',
    answers: [
      {
        points: 0,
        content: 'Answer 1',
      },
      {
        points: 1,
        content: 'Answer 2',
      },
      {
        points: 4,
        content: 'Answer 3',
      },
    ],
  },
];


// shuffle the answers for each question
(() => {
  quizQuestions.forEach((question) => {
    question.answers.sort((a, b) => {return 0.5 - Math.random()});
  });
})();

export default quizQuestions;
