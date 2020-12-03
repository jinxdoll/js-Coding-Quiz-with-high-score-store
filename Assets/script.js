// Global Variables
var viewHScoresBtnEl = document.querySelector("#viewHScores");
var timerEl = document.querySelector("#timer");
var score = 0;
var currentQ = 0;
var highScores = [];
var interval;
var timeGiven = 60;
var secondsElapsed = 0;

// Welcome variables elements
var welcomeEl = document.querySelector("#welcome");
var startQuizBtnel = document.querySelector("#startquiz");

// Quiz vairables elements
var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answers")
