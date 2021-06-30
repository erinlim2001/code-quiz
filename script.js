//arrray of the quiz questions, avaialble choices, and correct answers     
var questions = [{
  title: "A snail can sleep for how many years?",
  choices: ["3", "5", "7", "20"],
  answer: "3"
},
{
  title: "A group of lions is known as?",
  choices: ["family", "school", "pride", "group"],
  answer: "pride"
},
{
  title: "How many heart chambers a cockroach has?",
  choices: ["12", "1", "10", "4"],
  answer: "12"
},
{
  title: "Which bird is a universal symbol of peace?",
  choices: ["pigeon", "parrot", "eagle", "dove"],
  answer: "dove"
},
{
  title: "Which animal has the highest blood pressure?",
  choices: ["dog", "giraffe", "zebra", "koala)"],
  answer: "giraffe"
}
]

var startButton = document.getElementById("start-button");
var score = 0;
var currentQuestion = -1;
var timeLeft = 75;
var timer;

//when click start button, run function start
startButton.addEventListener('click', start);

//timer function
function setTime() {
  timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    
    if (timeLeft === 0) {
        //stops execution of action at set interval
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

//stop the timer to end the game 
function gameOver() {
clearInterval(timer);
}