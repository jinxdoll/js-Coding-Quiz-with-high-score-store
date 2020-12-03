
var myQuestions = [
    { 
       question: "What is finding and fixing errors in programs ?", 
       answers: { 
       a:"Debugging",
       b:"Program", 
       c:"Bug", 
       d:"Code"
       },
        correctAnswer:"a"
    },
    { 
       question: "What is the action of doing something over and over again ?",     
       answers: {
            a:"Loop",
            b:"Persistence",
            c:"Program", 
            d:"Code"
           }, 
           correctAnswer:"a"
   },

   { 
       question: "A person who writes code and communicates instructions to a computer in known as a ?", 
   
       answers: { 
           a:"Banker", 
           b:"Coder", 
           c:"Tester", 
           d:"Programmer"
       }, 
       correctAnswer:"d"
   },

   { 
       question: "The letter 'H' in HTML stands for ?", 
   
       answers: { 
           a:"Heavy", 
           b:"Hyper", 
           c:"Holding", 
           d:"Hollow"
       }, 
       correctAnswer:"b"
   }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

       
       function showQuestions(questions, quizContainer){
                              
        var output = [];
        var answers;

             // for each question
        for(var i=0; i<questions.length; i++){
        
                // resets the list of answers
         answers = [];

                 // for each available answer to this question
         for(letter in questions[i].answers){

             // add am html radio button
            answers.push(

                '<label>'

                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                + '</label>'
            );
         }

                // add this question and its answer to the output

         output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
             // combines output list into one string of html and puts it on the page//

        quizContainer.innerHTML = output.join('');
    }
       // end of showQuestions function  // 




         // start of ShowResults function//
     function showResults(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++){
            
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){

                numCorrect++;

                answerContainers[i].style.color = 'darkgreen';
                alert("That is correct!");
                
            }
             else{
                answerContainers[i].style.color = 'red';
                alert("wrong Answer");
            }

            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
            
        }
        
    }            // end of showResults container


    showQuestions(questions, quizContainer);

            
            
        // when user clicks submit, show results
    submitButton.onclick = function(){

        showResults(questions, quizContainer, resultsContainer);
        
    }   
    
}