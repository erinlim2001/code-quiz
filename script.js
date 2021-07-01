//arrray of the quiz questions, avaialble choices, and correct answers     
var timer;
var timeLeft = 75;
var score = 0;
var currentQuestion = -1;

var questions = [{
  question: "A snail can sleep for how many years?",
  choices: ["3", "5", "7", "20"],
  answer: "3"
},
{
  question: "A group of lions is known as?",
  choices: ["family", "school", "pride", "group"],
  answer: "pride"
},
{
  question: "How many heart chambers a cockroach has?",
  choices: ["12", "1", "10", "4"],
  answer: "12"
},
{
  question: "Which bird is a universal symbol of peace?",
  choices: ["pigeon", "parrot", "eagle", "dove"],
  answer: "dove"
},
{
  question: "Which animal has the highest blood pressure?",
  choices: ["dog", "giraffe", "zebra", "koala"],
  answer: "giraffe"
}
]

var startButton = document.getElementById("start-button");

//when click start button, run function start
startButton.addEventListener('click', start);

//timer function
function setTime() {
  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    if (timeLeft <= 0) {
      //stops execution of action at set interval
      //automatically zero when time left becomes negative
      timeLeft = 0;
      document.getElementById("timeLeft").innerHTML = timeLeft;
      clearInterval(timer);
      //calls function to end game 
      gameOver();
    }
  }, 1000);
}
//after start button click, function start starts timer and sets up next question
function start() {
  setTime();
  next();
}

//loops through the questions 
function next() {
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    gameOver();

  } else {
    document.getElementById("quiz-container").innerHTML = checkAnswer();
  }
}
//stop the timer to end the game 
function gameOver() {
  clearInterval(timer);
  var quizBody = "<h2>Game Over</h2>" + "<h2>Score: </h2>" + score + "<p> /100 </p>";
  document.getElementById("quiz-container").innerHTML = quizBody;
  
}


function wrong() {
  timeLeft = timeLeft - 15;
  next();
}

function correct() {
  score = score + 20;
  next();
}


//checks if answers are correct and updates body accordingly
function checkAnswer() {
  var quizBody = "<h2>" + questions[currentQuestion].question + "</h2>"
  //moving through choices to see if it is correct
  for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
  }


  return quizBody;

}
