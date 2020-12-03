
// questions for quiz
var questions = [
    { prompt: "What is finding and fixing errors in programs ?", a:"Debugging", b:"Program", c:"Bug", d:"Code", answer:"a"},
    { prompt: "What is the action of doing something over and over again ?", a:"Loop", b:"Persistence", c:"Program", d:"Code", answer:"a"},
    { prompt: "A person who writes code and communicates instructions to a computer in known as a ?", a:"Banker", b:"Coder", c:"Tester", d:"Programmer", answer:"d"},
    { prompt: "The letter 'H' in HTML stands for ?", a:"Heavy", b:"Hyper", c:"Holding", d:"Hollow", answer:"b"},
];

var startButton = document.getElementById("startButton")
// container for button needed.
var questionABtn = document.createElement("button")
var questionBBtn = document.createElement("button")
var questionCBtn = document.createElement("button")
var questionDBtn = document.createElement("button")

questionABtn.classList="answerButtonClass"
questionBBtn.classList="answerButtonClass"
questionCBtn.classList="answerButtonClass"
questionDBtn.classList="answerButtonClass"

var questionArray = []
var currentQuestion 

// var i = 0;

var score = 0;



// function startQuiz() {
    for(var i =0; i < questions.length; i++) {
       var response = window.prompt(questions[i].prompt);
       if(response == questions[i].answer) {
         score++;
         alert("You are correct!");
       } else {
         alert("That is false.");
       }             
     }
    // }
    alert("You got " + score + "/" + questions.length)

    




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