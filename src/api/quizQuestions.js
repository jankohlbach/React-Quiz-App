const quizQuestions = [
  {
    question: 'How good can you deal with frustration?',
    answers: [
      {
        points: 0,
        content: 'Not really good',
      },
      {
        points: 1,
        content: 'Annoying, but I can handle that',
      },
      {
        points: 2,
        content: 'What is frustration?',
      },
    ],
  },
  {
    question: 'What does the CSS-line display: flex do?',
    answers: [
      {
        points: 0,
        content: 'It sets a flexible width for the container',
      },
      {
        points: 2,
        content: 'It sets a flexible width for the elements in the container',
      },
    ],
  },
  {
    question: 'What are your skills in terms of HTML, CSS and JavaScript?',
    answers: [
      {
        points: 0,
        content: 'I heard about them',
      },
      {
        points: 1,
        content: 'I made a few basic websites with HTML and CSS',
      },
      {
        points: 2,
        content: 'I can use all of them without bigger problems',
      },
    ],
  },
  {
    question: 'How many headlines can you define in HTML?',
    answers: [
      {
        points: 0,
        content: 'h1, h2, h3, h4',
      },
      {
        points: 2,
        content: 'h1, h2, h3, h4, h5, h6',
      },
    ],
  },
  {
    question: 'What is your opinion about Internet Explorer?',
    answers: [
      {
        points: 0,
        content: 'I do not think it is that bad',
      },
      {
        points: 1,
        content: 'Really annoying to support it',
      },
      {
        points: 2,
        content: 'The hell in browser, I hope they bury it',
      },
    ],
  },
  {
    question: 'Which are all HTML5 elements?',
    answers: [
      {
        points: 0,
        content: '<figure>, <block>, <main>, <article>, <link>',
      },
      {
        points: 2,
        content: '<aside>, <time>, <footer>, <details>, <section>',
      },
    ],
  },
  {
    question: 'What about learning and expanding your knowledge?',
    answers: [
      {
        points: 0,
        content: 'I know everything I need',
      },
      {
        points: 1,
        content: 'I read some articles from time to time to keep up with features',
      },
      {
        points: 2,
        content: 'I try to learn new things every day to become better',
      },
    ],
  },
  {
    question: 'Which one is correct CSS?',
    answers: [
      {
        points: 0,
        content: '@media screen and (min-width: 768px) { .header{background-image: none;} }',
      },
      {
        points: 2,
        content: '@media (max-width: 1024px) { #navigation{background-image: linear-gradient(45deg, red 0 50%, blue 50% 100%);} }',
      },
    ],
  },
  {
    question: 'Do you have an eye for good design?',
    answers: [
      {
        points: 0,
        content: 'I can tell apart black and white',
      },
      {
        points: 1,
        content: 'I heard some basic principles and did some smaller designs by myself',
      },
      {
        points: 2,
        content: 'I use tools like Adobe or Sketch regularly',
      },
    ],
  },
  {
    question: 'Which one is correct JavaScript?',
    answers: [
      {
        points: 0,
        content: 'document.getElement(".header").addClass("scrolled");',
      },
      {
        points: 2,
        content: 'document.querySelector(".header").classList.add("scrolled");',
      },
    ],
  },
];

export default quizQuestions;
