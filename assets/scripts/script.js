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

1. create questionslist : question string, options, correct ans




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
const button = document.getElementById('start-btn');

// Event listener
function handleClick() {
    console.log('Button clicked!');
  }
  
  // Attach event listener
  button.addEventListener('click', handleClick);
  
