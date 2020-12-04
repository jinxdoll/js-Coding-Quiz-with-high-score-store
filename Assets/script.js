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
var startQuizBtnEl = document.querySelector("#startquiz");

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


// function to allow JS code to load before DOM. Function incapulates the entire JS code.
window.onlaod= function() {

// Starts Quiz from welcome page ----------------
startQuizBtnEl.addEventListener("click", function () {
    hide(welcomeEl);
    startTimer();
    renderQuestion();
    show(quizEl);
});


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

// Calls to check user answer input and call to the next question when button is clicked
answersEl.addEventListener("click", function (e) {
    // console.log(e.target);
    if(e.target.matches("button")) {
        checkAnswer(e.target);
        nextQuestion();
    }
});



// check answers for current question and update user score
function checkAnswer(answer) {
    // console.log("answer element: ");
    // console.log("answer";)
    var answerIndex = answer.id -1;
    // console.log("answer index:" + answerIndex);

    if (questions[currentQ].answer == questions[currentQ].choices[answerIndex]) {
        score =+ 5;
        // console.log("correct, score:" + score);
        displayMessage("Correct!");
        
    } else {
        secondsElapsed += 10;
        displayMessage("WRONG!");
        // console.log("incorrect, score:" + score")        
    }
}

// displays "correct" and "wrong" answer messages for 3 seconds below the quiz element container

function displayMessage(m) {
    var timeStart = 0;
    var timeStop = 2;
    var messageHr = document.createElement("hr");
    var messageEl = document.createElement("div");
    messageEl.textContent = m;
    document.querySelector(".jumbotron").appendChild(messageHr);
    document.querySelector(".jumbotron").appendChild(messageEl);
    var messageInterval = setInterval(function () {
        timeStart++;
        if (timeStart >= timeStop) {
        messageEl.remove();
        messageEl.remove();
        clearInterval(messageInterval)            
        }
    }, 1000);
}

// Hides element
function hide(element) {
    element.style.display = "none";
}

// Displays element
function show(element) {
    element.style.diplay ="block";
}


// Resets timer variables after message diplayed

function reset() {
    score = 0;
    currentQ = 0;
    secondsElapsed = 0;
    timerEl.textContent = 0;
}


// renders current question
function renderQuestion() {
    questionEl.textContent = questions[currentQ].title;
    for ( var i = 0; i < answersEl.children.length; i++) {
        answersEl.children[i].children[0].textContent = (i + 1) + ": " + questions[currentQ].choices[i];
      }
    }

// renders high scores to the local storage
    function renderHighScores() {
        while (scoresEl.firstChild) {
            scoresEl.removeChild(scoresEl.firstChild);
        }
        show(highScoresEl);
        highScores = JSON.parse(localStorage.getItem("scores"));
        for(var i = 0; i < highScores.length; i++) {
            var scoreItem = document.createElement("div");
            scoreItem.className += "row mb-3 p-2";
            console.log(scoreItem)
            scoreItem.setAttribute("style", "background-color:purple;");
            scoreItem.textContent = (i + 1) + ". " + highScores[i].username + " - " + highScores[i].userScore;
            scoresEl.appendChild(scoreItem);
        }
    }

// Displays High Scores when clicked
viewHScoresBtnEl.addEventListener("click", function() {
    hide(welcomeEl);
    hide(quizEl);
    hide(inputScoreEl);
    renderHighScores();
    stopTimer();
    reset();
});

//Goes back to welcome page from High Scores
goBackBtnEl.addEventListener("click", function () {
    hide(highScoresEl);
    show(welcomeEl);
});



// creates user object to store in local storage. Then calls to store user initials and high score in local storage then reset variables.
submitInitialsBtnEl.addEventListener("click", function () {
var initValue = initialsEl.value.trim();
if (initValue) {
    var userScore = { username: initValue, userScore: score };
    initValue.value = '';
    if (localStorage.getItem("scores")) {
        highScores = JSON.parse(localStorage.getItem("scores"));
    }
    highScores.push(userScore)
    localStorage.setItem("scores", json.stringify(highScores));
    hide(inputScoreEl);
    renderHighScores();
    reset();
 }
});

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





