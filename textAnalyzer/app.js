
function wordCounter(text){
  var spaceCount=text.match(/[\s]/gm);
  var paragraphCount=text.match(/(\.|\?|!|")$/gm);
  var wordCount=spaceCount.length+paragraphCount.length;
  return wordCount;
}


function totalLetterCounter(text){
  var letters=text.toLowerCase().match(/[a-zA-Z0-9]/gm);
  var totalLetterCount=letters.length;
  return totalLetterCount;
}

function avSentenceLengthCal(text, wordCount){
  var sentenceCount=(text.match(/(\.|\?|!|")/gm)).length;
  var avSentenceLength=(wordCount / sentenceCount).toFixed(2);
  return avSentenceLength;
}

function reportOnText(text){
  var wordCount=wordCounter(text);
  var totalLetterCount=totalLetterCounter(text);
  var averageWordLength=(totalLetterCount / wordCount).toFixed(2);
  var avSentenceLength=avSentenceLengthCal(text, wordCount);
  
  var textReport=$('.js-text-report');
  textReport.removeClass('hidden');
  textReport.find('.js-wordCount').text(wordCount);
  textReport.find('.js-averageWordLength').text(averageWordLength + " letters");
  textReport.find('.js-averageSentenceLength').text(avSentenceLength + " words");
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

