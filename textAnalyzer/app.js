
function wordCounter(text){
  var spaceCount=text.match(/[\s]/gm);
  var paragraphCount=text.match(/(\.|\?|!|")$/gm);
  var wordCount=spaceCount.length+paragraphCount.length;
  return wordCount;
}


function tokenizer(text){
  return text.toLowerCase().match(/[a-zA-Z0-9]/gm);
  
}


function reportOnText(text){
  var tokens=tokenizer(text);
  var wordCount=wordCounter(text);
  
  
  var textReport=$('.js-text-report');
  textReport.removeClass('hidden');
  textReport.find('.js-wordCount').text(wordCount);
  
  
}



function analyzeIt(){
   $('.js-userText').submit(function(event){
      event.preventDefault();
      var userText =$(this).find('#user-text').val();
      reportOnText(userText);
      });
   }
                   


$(function(){
  analyzeIt();
});

