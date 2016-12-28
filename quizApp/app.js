var questionNum=0;
  var correctAnswer = 0;
  var wrongAnswer = 0;
  var numOfQsAnswered = 0;
  var questionLib = [
  {
    question: "Q1 blah blah",
    option1: "Q1option 1",
    option2: "Q1option 2",
    option3: "Q1option 3",
    answer: [true, true, false]
  },
  {
    question: "Q2 blah blah",
    option1: "Q2option 1",
    option2: "Q2option 2",
    option3: "Q2option 3",
    answer: [false, true, true]
  },
  {
    question: "Q3 blah blah",
    option1: "Q3option 1",
    option2: "Q3option 2",
    option3: "Q3option 3",
    answer: [false, true, false]
  },
  {
    question: "Q4 blah blah",
    option1: "Q4option 1",
    option2: "Q4option 2",
    option3: "Q4option 3",
    answer: [true, false, false]
  },
  {
    question: "Q5 blah blah",
    option1: "Q5option 1",
    option2: "Q5option 2",
    option3: "Q5option 3",
    answer: [false, true, true]  
  }  
];


function resetPage(){ 
  $(".js-question").replaceWith('<div class="question js-question">', '</div>');
  $(".js-answerDiv").empty();
  console.log("page reset");
}

function question(questionNum, questionLib){
  //print current question
  resetPage();
  row = '<p>';
  row += questionLib[questionNum].question;
  row += '</p>';
  row += '<form class="js-form">';
  row += '<input type="checkbox" name="option1" id="option1" value="0">' +
  '<label for="option1">';
  row += questionLib[questionNum].option1;
  row += '</label>';
  row += '<input type="checkbox" name="option2" id="option2" value="1">' +
  '<label for="option2">';
  row += questionLib[questionNum].option2;
  row += '</label>';
  row += '<input type="checkbox" name="option3" id="option3" value="2">' +
  '<label for="option3">';
  row += questionLib[questionNum].option3;
  row += '</label>';
  console.log("5");
  row += '<button class="js-answer" type="submit">Submit Answer</button>';
  row += '</form>';
  $(".js-question").append(row);
  console.log("after appending all the rows.");
  
  
  
//collet user's answer to current question
  $('.js-answer').click(function(event){
    var userAnswer=[true, true, true];
    var option1checked = $('#option1').prop("checked");
    if (option1checked === true) {
      userAnswer[0] = true;
    }
      else {
        userAnswer[0] = false;
      }
   console.log("user checked option1: ", userAnswer[0]); 
    var option2checked = $('#option2').prop("checked");
    if (option2checked === true) {
      userAnswer[1] = true;
    }
      else {
        userAnswer[1] = false;
      }
   console.log("user checked option2: ", userAnswer[1]);
    var option3checked = $('#option3').prop("checked");
    if (option3checked === true) {
      userAnswer[2] = true;
    }
      else {
        userAnswer[2] = false;
      }
   console.log("user checked option3: ", userAnswer[2]); 
   console.log("user's answer to  Q1: ", userAnswer);
  
  
  //compare user's answer to current answer
   console.log("the correct answer to Q1 is: "); 
   console.log(questionLib[questionNum].answer);

   var succeeded = true;
   for (var k=0; k<=2; k++) {
     if (userAnswer[k] != questionLib[questionNum].answer[k]) {
       succeeded = false;
       console.log("7");
       }
   }
   console.log("8");
   if (succeeded===false) {
     //show the correct answer
     //$(".js-answer").replaceWith('<div class="answer js-answer">', '</div>');
     $(".js-answer").replaceWith('<div class="answer js-answer"></div>');
     answerHtml = '<h3>Wrong!</h3>'
     answerHtml += '<p>';
     answerHtml += 'Q1 answer blah blah';
     answerHtml += '</p>';
     answerHtml += '<button class="js-nextQuestionButton">Next</button>';
     console.log("9.45");
     $(".js-answerDiv").append(answerHtml);
     console.log("9.46");
     $(".js-nextQuestionButton").click(function(event){
         console.log("9.5");
         questionNum=questionNum+1;
         console.log("10", questionNum);
         question(questionNum, questionLib);
     });
    
   }
      else {
         questionNum++;
         console.log("10");
         question(questionNum, questionLib);
      }
    
    
    //and below is the move on code
    
  });  
}  

//starting the quiz by clicking the start button
$('.js-button').click(function(event){
    question(questionNum, questionLib);
});



