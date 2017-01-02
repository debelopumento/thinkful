var youtubeURL = "https://www.googleapis.com/youtube/v3/search";


function renderResults(results){
		var row = '';
		console.log("2");
		var resultsNum = results.length;
		for (var i=0; i < resultsNum; i++)  {
				var video = results[i];
				row +='<span class="youtubeThumbnails">';
				//row += "<h5>" + video.snippet.title + "</h5>";
				row += '<a href="https://www.youtube.com/watch?v=' + video.id.videoId + '">';
				row += '<img class="thumbImg" src="' + video.snippet.thumbnails.default.url + '">';
				row += "</a></span>"
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
          maxResults: 20
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