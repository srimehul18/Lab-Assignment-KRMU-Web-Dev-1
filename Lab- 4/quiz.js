// Web Dev I - Lab Assignment 4
// Name: Mehul Srivastava
// Roll no. 2501730149

const quizQuestions = [
  {
    question: "What is the capital of India?",
    answer: "delhi"
  },
  {
    question: "Who won gold medal for india in 2021 olympics?",
    answer: "neeraj chopra"
  },
  {
    question: "What is the full-form of ISRO?",
    answer: "indian space research organization"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript? (var/let/const)",
    answer: "var"
  },
  {
    question: "Which planet is known as the Largest Planet?",
    answer: "jupiter"
  },
  {
    question: "Full-form of CSS?",
    answer: "cascading style sheets"
  },
  {

    question: "Tallest Mountain in the world?",
    answer: "mount everest"
  },

  {
    question: "Who is president of United States?",
    answer: "donald trump"
  },
  {
    question: "When was HTML first developed?",
    answer: "1993"
  },
  {
    question: "Who has the most number of ODI centuries in cricket?",
    answer: "virat kohli"
  },
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    if (userAnswer === null) {
      alert("Quiz cancelled!");
      return;
    }

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct! ");
      score++;
    } else {
      alert("Incorrect! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  alert("Quiz Completed! \nYour final score: " + score + " / " + quizQuestions.length);

  switch (true) {
    case (score >= 8 && score <= 10):
      alert("Excellent! Amazing performance!");
      break;

    case (score >= 5 && score <= 7):
      alert("Good job! Keep trying, you are close!");
      break;

    case (score >= 3 && score <= 4):
      alert("You can improve! Practice a bit more!");
      break;

    case (score >= 1 && score <= 2):
      alert("You can do it, just try! Don't give up!");
      break;

    default:
      alert("Better luck next time! Keep learning!");
  }
}


runQuiz();
