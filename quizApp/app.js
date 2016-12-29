var questionLib = [
  {
    question: "What is Alleged Country of Origin of Ramen?",
    option1: "Japan",
    option2: "South Africa",
    option3: "China",
    answer: [false, false, true]
  },
  {
    question: "What is an item often sold alongside ramen noodles?",
    option1: "Taco",
    option2: "Icecream",
    option3: "Gyoza",
    answer: [false, false, true]
  },
  {
    question: "Which ones of these are proper ramen flavours?",
    option1: "Shio",
    option2: "Miso",
    option3: "Vanilla",
    answer: [true, true, false]
  },
  {
    question: "Which country is the inventor of instant ramen from?",
    option1: "U.S.A.",
    option2: "India",
    option3: "Japan",
    answer: [false, false, true]
  },
  {
    question: "What is the color of the broth of Shoyu Ramen",
    option1: "brown",
    option2: "pink",
    option3: "green",
    answer: [true, false, false]  
  }  
];

function mainSectionHtml(){
  return '<div class="streak js-streak col-12 hidden">' +
        '<span class="streakFont">Your Streak:</span> <span class="js-questionsAnswered streakNumFont"></span><span> out of 5 questions were answered.</span><span class="js-correctAnswerNum streakFont streakNumFont"></span><span> correct, </span><span class="js-wrongAnswerNum streakFont streakNumFont"></span><span> incorrect.</span>' +
    '</div>' +
    '<div class="questionDiv">' +
      '<div class="question js-question">' +
      '<button class="startButton js-button">Start</button>' +
    '</div>' +
    '</div>' +
    '<div class="answerDiv js-answerDiv">' +
    '<div class="answer js-answer">' +
      '</div>' +
    '</div>'
}

function resetPage(){ 
  $(".js-question").replaceWith('<div class="question js-question">', '</div>');
  $(".js-answerDiv").empty();
  console.log("page reset");
}

function showAnswer(questionNum, questionLib,correctAnswerNum){
  $(".js-answer").replaceWith('<div class="answer js-answer"></div>');
     answerHtml = '<h3 class="wrong">WRONG!</h3>';
     answerHtml += '<div class="answerDiv"><p class="answerFont">';
     answerHtml += 'The correct answer is: ' + '</br>';
     console.log("8.1", questionNum);
     
     
       if (questionLib[questionNum].answer[0]===true){
         answerHtml += questionLib[questionNum].option1 + '</br>';
         console.log("13");
       }
       if (questionLib[questionNum].answer[1]===true){
         answerHtml += questionLib[questionNum].option2 + '</br>';
       }
       if (questionLib[questionNum].answer[2]===true){
         answerHtml += questionLib[questionNum].option3 + '</br>';
       }
     
     answerHtml += '</p></div>';
     if(questionNum < 4) {
        answerHtml += '<button class="js-nextQuestionButton submitAnswerButton">Next</button>';
        $(".js-answerDiv").append(answerHtml);
     }
     
     if(questionNum === 4){
       answerHtml += '<button class="js-nextQuestionButton submitAnswerButton">Finish</button>';
       $(".js-answerDiv").append(answerHtml);
       $('.js-nextQuestionButton').click(function(event){
          endPage(questionNum, questionLib, correctAnswerNum);
       });  
     }
     
}

function congrats(questionNum, questionLib, correctAnswerNum){
  console.log("101");
  $(".js-answer").replaceWith('<div class="answer js-answer"></div>');
     answerHtml = '<h3>Correct!</h3>';
     if(questionNum < 4)
        {answerHtml += '<p>' + '<button class="js-nextQuestionButton submitAnswerButton">Next</button>' + '</p>'};
     $(".js-answerDiv").append(answerHtml);
     if(questionNum === 4){
       endPage(questionNum, questionLib, correctAnswerNum);
     }
}

function endPage(questionNum, questionLib, correctAnswerNum){
  endPageHtml = '<h3 class="congrats">Congratulations!</h3>' +
                '<p>You got ' +
                correctAnswerNum +
                ' right out of the total 5 questions. </p>' +
                '<button class="js-button submitAnswerButton">Try again</button>';
  resetPage();
  $('.js-mainSection').html(endPageHtml);
  $('.js-button').click(function(event){
    $('.js-mainSection').html(mainSectionHtml);
    var questionNum=0;
    var correctAnswerNum = 0;
    $('.js-streak').removeClass("hidden");
    question(questionNum, questionLib, correctAnswerNum);
  });

}

function question(questionNum, questionLib, correctAnswerNum){
  
  $('.js-questionsAnswered').html(questionNum);
  $('.js-correctAnswerNum').html(correctAnswerNum);
  $('.js-wrongAnswerNum').html(questionNum-correctAnswerNum);
  resetPage();
  row = '<p class="questionFont">';
  row += questionLib[questionNum].question;
  row += '</p>';
  row += '<form class="js-form">';
  row += '<input type="checkbox" name="option1" id="option1" value="0">' +
  '<label class="choice" for="option1">';
  row += questionLib[questionNum].option1;
  row += '</label>';
  row += '<input type="checkbox" name="option2" id="option2" value="1">' +
  '<label class="choice" for="option2">';
  row += questionLib[questionNum].option2;
  row += '</label>';
  row += '<input type="checkbox" name="option3" id="option3" value="2">' +
  '<label class="choice" for="option3">';
  row += questionLib[questionNum].option3;
  row += '</label>';
  console.log("5");
  row += '<div class="submitAnswerDiv"><button class="js-answer submitAnswerButton" type="submit">Submit Answer</button></div>';
  row += '</form>';
  $(".js-question").append(row);
  console.log("question " + questionNum, " asked");
  
  
  
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
    var option2checked = $('#option2').prop("checked");
    if (option2checked === true) {
      userAnswer[1] = true;
    }
      else {
        userAnswer[1] = false;
      }
    var option3checked = $('#option3').prop("checked");
    if (option3checked === true) {
      userAnswer[2] = true;
    }
      else {
        userAnswer[2] = false;
      }
  
  //compare user's answer to current answer
   console.log("the correct answer to Q ", questionNum,  "is: "); 
   console.log(questionLib[questionNum].answer);

   var succeeded = true;
   for (var k=0; k<=2; k++) {
     if (userAnswer[k] != questionLib[questionNum].answer[k]) {
       succeeded = false;
       }
   }
   if (succeeded===false) {
     showAnswer(questionNum, questionLib,correctAnswerNum);
     $(".js-nextQuestionButton").click(function(event){
         questionNum = questionNum+1;
         console.log("10", questionNum);
         question(questionNum, questionLib, correctAnswerNum);
     });
    
   }
      else {
         congrats(questionNum, questionLib, correctAnswerNum);
         questionNum=questionNum+1;
         correctAnswerNum=correctAnswerNum+1;
         console.log("10 " + questionNum);
         $(".js-nextQuestionButton").click(function(event){
         question(questionNum, questionLib, correctAnswerNum);
         });  
      }
  });  
}  



//starting the quiz by clicking the start button
$(function(){
  var questionNum=0;
  var correctAnswerNum = 0;
  $('.js-mainSection').html(mainSectionHtml);
  $('.js-button').click(function(event){
    $('.js-streak').removeClass("hidden");
    question(questionNum, questionLib, correctAnswerNum);
  });
});


