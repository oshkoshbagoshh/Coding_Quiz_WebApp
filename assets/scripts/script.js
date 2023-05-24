/*
 * @Author: AJ Javadi
 * @Email: someone@example.com
 * @Date: 2023-05-23 17:56:33
 * @Last Modified by:   undefined 
 * @Last Modified time: yyyy-05-dd 17:56:14
 * @Description: file:///Users/aj/Desktop/bootcamp/Homework/4.%20Coding%20Quiz/Coding_Quiz_WebApp/assets/scripts/script.js
 */
/*


// Pseudocode 

 create questionslist : question string, options, correct ans

create question counter = 0

Click on start button(attach event listener)

start timer from 75 secs
        every sec time is going to decrement
        display it on screen
   show 1st question with options(function)
Clicking on the answer options (attach event listener)
    check if ans click by user matches with correct ans for question
       display correct msg
       check if we have time
         if question counter < length of question array
            increment the question counter 
                 go to next question
        else ||  if(timer === 0)
        stop timer and grab the last sec left
           display the score
           form is going to take user initial and score and save it in local storage and display it on second html page.
    if wrong ans
       display wrong msg
       decrement timer by 10
       check if we have time
       if question counter < length of question array
            increment the question counter 
            go to next question
        else || if(timer === 0)
            stop timer and grab the last sec left
           display the score
           form is going to take user initial and score and save it in local storage and display it on second html page.



************************************************************/

// Declare variables 
var startBtn = document.getElementById('start-btn');
var timer = document.getElementById("timer");
var count = 75;
var clock = 75;
var questions = ["Question One","Question Two", "Question Three","Question Four"];
var answers = [1,2,3,4];
var wins = 0;
var losses = 0;
var score = 0;

// Event listener
function handleClick() {
    console.log('Button clicked!');
    // log to the console
    //now do something
    alert("click working");

  }
  
  // Attach event listener
  startBtn.addEventListener('click', function(e){
    count--;
    timer.textContent = count;
    
    // count down 
    if (count <== 0) {

        clearInterval(timer)
        h2E1.textContent = "times up!"
    } else () {
        //do something else
        timer.textContent = "count"
    }
    
    
    }
  }


//   Questions:

// Questionlist array of objects 
var questionList =  [
    {
        questionOne: "Commonly used data types DO Not Include:",
        a: "1. Strings",
        b: "2. Booleans",
        c: "3. Alerts",
        d: "4. Numbers",
    },
        {
            questionTwo: "The condition in an if/else statement is enclosed with ____.",
            a:"1. Quotes",
            b:"2. Curly Brackets",
            c:"3. Parenthesis",
            d:"4. Square Brackets",




        },

        {
            questionThree:"Arrays in JavaScript can be used to store _____",
            a:"1. Numbers and strings " ,
            b:"2. Other Arrays",
            c:"3. booleans",
            d:"4. all of the above",

        },

        {  questionFour:"String values must be enclosed within ___ when being assigned to variables",
            a:"1. commas" ,
            b:"2. curly brackets",
            c:"3. quotes ",
            d:"4. parenthesis ",

    },
    {
        questionFive:"A very useful tool used during development and debugging for printing content to the debugger is: ",
        a:"1. JavaScript",
        b:"2. terminal/bash",
        c:"3. for loops",
        d:"console.log",
    }


];
// log to the console
console.log(questionList);

var stringQuestionlist = questionList.toString();
console.log(stringQuestionlist);

// create function to check answers


var quiz = document.getElementById(".quiz");
const answerElements = document.querySelectorAll(".answer");
var questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

// let currentQuiz = 0;
// let score = 0;

// function check_Answers () {}



