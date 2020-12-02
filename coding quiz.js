var questions = [
    { q: "What is finding and fixing errors in programs?", a:"Debugging", b:"Program", c:"Bug", d:"Code"},
    { q: "What is the action of doing something over and over again?", a:"Loop", b:"Persistence", c:"program", d:"Code"},
    { q: "A person who writes code and communicates instructions to a computer in known as?", a:"Banker", b:"Coder", c:"Tester", d:"Programmer"},
    { q: "The letter 'H' in HTML stands for?", a:"Heavy", b:"Hyper", c:"Holding", d:"Hollow"},
];

var startButton = document.getElementById("startButton")
// container for button needed.
var questionAButton = document.createElement("button")
var questionBButton = document.createElement("button")
var questionCButton = document.createElement("button")
var questionDButton = document.createElement("button")
questionAButton.classList="answerButtonClass"

var questionArray = []
var currentQuestion 

var i = 0;

var score = 0;

// function startQuiz() {
//     for (var i =0; i <questions.length; i++) {
//         var answer = confirm(questions[i].q);
    
//         if (answer === true && questions[i].a === "true" ||
//         answer === false && questions[i].a === "false") {
    
//             score++;
//             alert("You are correct!");            
//         } 
//         else {
//             alert("You are wrong!");
//         }  
//     }
// }


// function questionRenderer() {
// if(questionsArray.lenght >=questions.length) {
//     // end quiz function here
// }
// else{
//     currentQuestion = questions[i]
// questionArray.push(questions[i])

// }


// }

// startButton.addEventListener("click", startQuiz)