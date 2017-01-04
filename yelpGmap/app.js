var yelpAPIurl = "https://api.yelp.com/v3/businesses/search";
var appID = "lXWZb7kmxUqaH0ouzpmy0w";
var appSecret = "ZxUb1UOGV28dPS4dLLN8lq3EGxsqcLLjeMoDqQftDynULxDHclV6JSkOISwUCmJV";



$(function() {
	console.log("1");
	watchSubmit()	
});


function watchSubmit() {
	console.log("2");
	$('.js-search-form').submit(function(){
		console.log("3");
		event.preventDefault();
		var userInputSearchItem = $(this).find ('.js-userInputSearchItem').val();
		getAccessToken();
		getSearchResults(userInputSearchItem);
		console.log("4");
	});
}	

function getAccessToken() {
	$.ajax({
			'url': "https://api.yelp.com/oauth2/token",
			'grant_type': "client_credentials",
			'client_id': appID,
			'client_secret': appSecret,
			'dataType': "jsonp"
		}
			//set header
			
			//
			
	)
}	

function getSearchResults(userInputSearchItem) {
	console.log("5");
	$.getJSON (
		yelpAPIurl, {
			total: 20,
			term: userInputSearchItem
			
		},
			function(businesses) {
				renderBusinesses(businesses.items);
			}	
	);
}	

function renderBusinesses(businesses) {
		var row = '';
		var businessNum = businesses.length;
		for (var i = 0; i < businessNum; i++) {
			var biz = businesses[i];
			row += '<p>' + biz.name + '</p>';
		}
		$('.js-sesarch-results').html(row);	
}	
