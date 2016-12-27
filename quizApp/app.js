var correctAnswer = 0;
var wrongAnswer = 0;
var numOfQsAnswered = 0;
var questionLib = [
  Q1={
    question: "Q1 blah blah",
    option1: "option 1",
    option2: "option 2",
    option3: "option 3",
    answer: [0, 1]
  },
  Q2={
    question: "Q2 blah blah",
    option1: "option 1",
    option2: "option 2",
    option3: "option 3",
    answer: [1, 2]
  },
  Q3={
    question: "Q3 blah blah",
    option1: "option 1",
    option2: "option 2",
    option3: "option 3",
    answer: [0, 1, 2]
  },
  Q4={
    question: "Q4 blah blah",
    option1: "option 1",
    option2: "option 2",
    option3: "option 3",
    answer: [0, 2]
  },
  Q5={
    question: "Q5 blah blah",
    option1: "option 1",
    option2: "option 2",
    option3: "option 3",
    answer: [0, 1, 2]  
  }  
];


function resetPage(){ 
  $(".js-question").html('<div class="question js-question">', '</div>');
  console.log("page reset");
}

function question(questionNum){
  //print current question
  resetPage();
  row = '<p>';
  row += questionLib[questionNum].question;
  row += '</p>';
  row += '<input type="radio" name="option1" id="option1 value="0" checked>' +
  '<label for="option1">';
  row += questionLib[questionNum].option1;
  row += '</label>';
  row += '<input type="radio" name="option2" id="option2 value="1">' +
  '<label for="option2">';
  row += questionLib[questionNum].option2;
  row += '</label>';
  row += '<input type="radio" name="option3" id="option3 value="2">' +
  '<label for="option3">';
  row += questionLib[questionNum].option3;
  row += '</label>';
  row += '<button class="js-answer" type="submit">Submit Answer</button>';
  $(".js-question").append(row);
  
  //collet user's answer to current question
  $('.js-answer').click(function(event){
    console.log("answer submitted");
    var userAnswer=[];
    var className1 = $('#option1').className;
    if ("checked" in className) {
      userAnswer.push(0);
    };
    var className2 = $('#option2').className;
    if ("checked" in className) {
      userAnswer.push(1);
    };
    var className3 = $('#option3').className;
    if ("checked" in className) {
      userAnswer.push(2);
    };
  });
  
  //compare user's answer to current answer
  for (var i=0 i<=2 i++) {
    if ( userAnswer[i] <> (questionLib[questionNum].answer)[i]){
      
    }
  }
  
  
}

$('.js-button').click(function(event){
  console.log("button clicked");
  questionNum=0;
  question(questionNum);
});



