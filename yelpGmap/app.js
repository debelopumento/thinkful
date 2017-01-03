var yelpAPIurl = "https://api.yelp.com/v3/businesses/search";
var appID = "lXWZb7kmxUqaH0ouzpmy0w";
var appSecret = "ZxUb1UOGV28dPS4dLLN8lq3EGxsqcLLjeMoDqQftDynULxDHclV6JSkOISwUCmJV";



$(function() {
	console.log("1");
	getAccessToken();
});

function getAccessToken() {
	$.post("https://api.yelp.com/oauth2/token", {
			grant_type: "client_credentials",
			client_id: appID,
			client_secret: appSecret,
		},
		function(responseBody) {
			console.log(responseBody);
			authAPIwAccessToken(responseBody);
		}	
	);
}	

function authAPIwAccessToken(responseBody) {
	//Authenticate API calls with the access token, set the Authorization HTTP header value as Bearer access_token
	
	
	watchSubmit();	
}	

function watchSubmit() {
	console.log("2");
	$('.js-search-form').submit(function(){
		console.log("3");
		event.preventDefault();
		var userInputSearchItem = $(this).find('.js-userInputSearchItem').val();
		//var location = $(this).find('.js-userInputLocation').val();
		getSearchResults(userInputSearchItem);
		console.log("4");
	});
}	


function getSearchResults(userInputSearchItem) {
	console.log("5");
	$.getJSON (
		yelpAPIurl, {
			total: 10,
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
