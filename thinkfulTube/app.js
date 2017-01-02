var youtubeURL = "https://www.googleapis.com/youtube/v3/search";


function renderResults(results){
		var row = '';
		console.log("2");
		var resultsNum = results.length;
		for (var i=0; i < resultsNum; i++)  {
				var video = results[i];
				row += "<li>";
				row += "<h3>" + video.snippet.title + "</h3>";
				row += "<a href='https://www.youtube.com/watch?v=" + video.id.videoId + "</a>";
				row += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + video.id.videoId + '"frameborder="0" allowfullscreen></iframe>';
				console.log("10", video.snippet);
				//row += '<img src="' + video.snippet.thumbnails.default.url + '">';
				row += "</li>"
		}
	$('.js-search-results').html(row);
}


function getData(query){
	$.getJSON(
        youtubeURL, {
          part: "snippet",
          key: "AIzaSyCr5zEANyQT8TjBWGEZnAOe0uNH1GyIPOo",
          q: query,
          type: "video",
          maxResults: 10
        },
      //render results
	  
	  function(results){
		renderResults(results.items);
	  });
}

function watchSubmit(){
		console.log("4");
        $('.js-search-form').submit(function(){
				console.log("5");
                event.preventDefault();
				var query = $(this).find('.js-query').val();
				getData(query);
				console.log("1");
		});	
}

$(function(){
  console.log("3");
  watchSubmit();
    
});