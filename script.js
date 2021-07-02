var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreDiv = document.getElementById("score");
var timerDisplay = document.getElementById("timerDisplay");

//create questions
var questions = [
    {
        question: "Which bird is a universal symbol of peace?",
        choiceA: "pigeon",
        choiceB: "parrot",
        choiceC: "eagle",
        choiceD: "dove",
        correct: "D"
    },
    {
        question: "A snail can sleep for how many years?",
        choiceA: "3",
        choiceB: "5",
        choiceC: "7",
        choiceD: "20",
        correct: "A"
    },
    {
        question: "A group of lions is known as?",
        choiceA: "family",
        choiceB: "school",
        choiceC: "pride",
        choiceD: "group",
        correct: "C"
    },
    {
        question: "How many heart chambers a cockroach has?",
        choiceA: "12",
        choiceB: "1",
        choiceC: "10",
        choiceD: "4",
        correct: "A"
    },
    {
        question: "Which animal has the highest blood pressure?",
        choiceA: "dog",
        choiceB: "giraffe",
        choiceC: "zebra",
        choiceD: "koala",
        correct: "giraffe"
    }

];

var lastQuestion = questions.length - 1;
let currentQuestion = 0;
var score = 0;
var timer;
var timeLeft = 75;

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

function renderQuestion(){
    var q = questions[currentQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

function startQuiz() {
    timerDisplay.style.display = "block";
    setTime();
    start.style.display = "none";
    renderQuestion();
    quiz.style.display= "block";
}

function checkAnswer(answer) {
    if(answer == questions[currentQuestion].correct) {
        score += 20;
    } else {
        timeLeft -= 15;
    }
    if(currentQuestion < lastQuestion) {
        currentQuestion++;
        renderQuestion();
    } else {
        gameOver();
        clearInterval(timer);
    }
}

function gameOver(){
    question.style.display = "none";
    choices.style.display = "none";
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = "<p> YOU GOT: " + score + "%<p>";
}

