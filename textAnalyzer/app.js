function getAverageWordsPerSentence(text) {

  var numSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
  var wordCount = tokenizeText(text).length;
  return (wordCount / numSentences).toFixed(1);
}

function getAverageWordLength(tokens) {

  var totalLength = tokens.join("").length;
  return (totalLength / tokens.length);toFixed(1);
}

function countDistinctWords(tokens) {

  var distinctWords = new Set(tokens);
  return distinctWords.size;
}

function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g);
}


function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}


  function reportOnText(text) {

  var tokens = tokenizeText(text);
  var numUniqueWords = countDistinctWords(tokens);
  var numTotalWords = tokens.length;
  var averageWordLength = getAverageWordLength(tokens);
  var averageWordsPerSentence = getAverageWordsPerSentence(text);


  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(numTotalWords);
  textReport.find('.js-unique-word-count').text(numUniqueWords);
  textReport.find('.js-average-word-length').text(
    averageWordLength + " characters");
  textReport.find('.js-average-sentence-length').text(
    averageWordsPerSentence + " words");
  textReport.removeClass('hidden');
}


function analyzeText() {
  $('.js-text-form').submit(function(event) {
    event.preventDefault();
    
    var userText = $(this).find('#user-text').val();
    reportOnText(removeReturns(userText));
  });
}


$(function() {
  analyzeText();
});