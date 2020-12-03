// Global Variables
var viewHScoresBtnEl = document.querySelector("#viewHScores");
var timerEl = document.querySelector("#timer");
var score = 0;
var currentQ = 0;
var highScores = [];
var interval;
var timeGiven = 75;
var secondsElapsed = 0;

// Welcome variables elements
var welcomeEl = document.querySelector("#welcome");
var startQuizBtnel = document.querySelector("#startquiz");

// Quiz vairables elements
var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers")

// Input variables elements
var inputScoreEl = document.querySelector("#inputScore");
var initialsEl = document.querySelector("#initials");
var submitInitialsBtnEl = document.querySelector("#submitInitials");
var userScoreEl = document.querySelector("#score")

// High score variables elements
var highScoresEl = document.querySelector("#highScores");
var scoresEl = document.querySelector("#scores");
var goBackBtnEl = document.querySelector("#goBack");
var clearScoresBtnEl = document.querySelector("#clearScores");





// Starts Quiz from welcome page ----------------
startQuizBtnEl.addEventListener("click", function (){
    hide(welcomeEl);
    startTimer();
    renderQuestion();
    show(quizEl);
})


// Start timer function-----------------------
function startTimer() {
    timerEl.textContent = timeGiven;
    interval = setInterval(function () {
        secondsElapsed++;
        timerEl.textContent = timeGiven - secondsElapsed;
        if(secondsElapsed>= timeGiven) {
            currentQ = questions.length;
            nextQuestion();
        }
    }, 1000);
    
}


//Clears current questions and calls for diplay of next question
// Calls for input score display if last question
function nextQuestion() {
    currentQ++;
    if (currentQ < questions.length) {
        renderQuestion();
    } else {
        // console.log("final score: " + score);
        stopTimer();
        if ((timeGiven - secondsElapsed) > 0)
            score += (timeGiven - secondsElapsed);
        userScoreEl.textContent = score;
        hide(quizEl)    ;
        show(inputScoreEl);
        timerEl.textContent = 0;
    }
    
}
 
// Stop timer function
 function stopTimer(){
     clearInterval(interval);
 }


// check answers for curretn question and update user score
function checkAnswer(answer) {
    // console.log("answer element: ");
    // console.log("answer";)
    var answerIndex = answer.id -1;
    // console.log("answer index:" + answerIndex);

    if (questions[currentQ].answer == questions[currentQ].choices.[answerIndex]) {
        score =+ 5;
        // console.log("correct, score:" + score);
        displayMessage("Correct!");
        
    } else {
        secondsElapsed += 10;
        displayMessage("WRONG!");
        // console.log("incorrect, score:" + score")        
    }
}




// ===================Question functions=========================

// Next question function




// Check answer function





// Display Message function for 4 seconds






// Hides message element after 4 second display




// Displays element




// ====================Reset timer function======================

// Resets timer variables



// ======================Render Question====================




// Render question




// Render question with high scores into local storage






// ===================Events==============================


// Display high scores






// Start quiz from welcome page





// Check answers and calls next question if button clicked








// Creates user high score and pushes top local storage and call to display highscores





// Goes back to welcome page from high scores






// Clears saved scores from local storage





