var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreDiv = document.getElementById("score");
var timerDisplay = document.getElementById("timerDisplay");
var enter = document.getElementById("enter");
var startOver = document.getElementById("startOver");

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
        correct: "B"
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
        //gameOver();
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
enter.addEventListener("click", highScore);
startOver.addEventListener("click", startQuiz);

function startQuiz() {
    const description = document.getElementById('description');
    description.style.display = "none";
    timeLeft = 75;
    score = 0;
    currentQuestion = 0;

    timerDisplay.style.display = "block";
    setTime();
    start.style.display = "none";
    startOver.style.display = "none";
    choiceA.style.display = "block";
    choiceB.style.display = "block";
    choiceC.style.display = "block";
    choiceD.style.display = "block";
    scoreDiv.style.display = "none";

    renderQuestion();
    quiz.style.display= "block";
}

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

async function checkAnswer(answer) {
    const output = document.getElementById('output');

    if(answer == questions[currentQuestion].correct) {
        score += 20;
        output.style.display = "block";
        //output.style.backgroundColor = "#B8FF33";
        output.innerHTML = 'Correct!'
    } else {
        timeLeft -= 15;
        output.style.display = "block";
        //output.style.backgroundColor = "#FF3375";
        output.innerHTML = 'Wrong!'
    }
    await sleep(1000);
    output.style.display = "none";

    if(currentQuestion < lastQuestion) {
        currentQuestion++;
        renderQuestion();
    } else {
        gameOver();
        clearInterval(timer);
    }
}

function gameOver0(){
    question.style.display = "none";
    choices.style.display = "none";
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = "<p> YOU GOT: " + score + "%<p>";
}

function gameOver(){
    const A = document.getElementById('A');
    const B = document.getElementById('B');
    const C = document.getElementById('C');
    const D = document.getElementById('D');
    const I = document.getElementById('initial');
    const E = document.getElementById('enter');

    A.style.display = "none";
    B.style.display = "none";
    C.style.display = "none";
    D.style.display = "none";
    question.innerHTML = 'All done!';
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = "<p> YOU GOT: " + score + "%  <br>Enter initial:</br><p>";
    I.style.display = "block";
    E.style.display = "block";
}

function highScore() {
    const A = document.getElementById('A');
    const B = document.getElementById('B');
    const C = document.getElementById('C');
    const D = document.getElementById('D');
    const I = document.getElementById('initial');
    const E = document.getElementById('enter');
    const SO = document.getElementById('startOver');

    var iText = I.innerText;
    A.style.display = "none";
    B.style.display = "none";
    C.style.display = "none";
    D.style.display = "none";
    
    I.style.display = "none";
    E.style.display = "none";
    savedScore = parseInt(localStorage.getItem(iText));
 
    if (isNaN(savedScore) || score > savedScore) {
        localStorage.setItem(iText, score);
        question.innerHTML = 'High score';
        scoreDiv.style.display = "block";
        scoreDiv.innerHTML = "<p> " + iText + ": " + score + "% <p>";
    } else {
        question.innerHTML = 'High score';
        scoreDiv.style.display = "block";
        scoreDiv.innerHTML = "<p> " + iText + ": " + savedScore + "% <p>";
    }
    SO.style.display = "block";
    
}
