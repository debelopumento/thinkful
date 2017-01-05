//Yelp api documentation: https://www.yelp.com/developers/documentation/v3/get_started

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
		//getAccessToken();
		//getSearchResults(userInputSearchItem);
		getResult();
		console.log("4");
	});
}	

function getAccessToken() {
	$.ajax({
			url: "https://api.yelp.com/oauth2/token",
			type: "POST",
			callback: '?',
			grant_type: "client_credentials",
			client_id: "lXWZb7kmxUqaH0ouzpmy0w",
			client_secret: "ZxUb1UOGV28dPS4dLLN8lq3EGxsqcLLjeMoDqQftDynULxDHclV6JSkOISwUCmJV",
			dataType: "jsonp",
			success: function() { alert("Success"); },
			error: function() { alert('Failed!'); },
		},
			//set header
			
			//
		function(access_token) {
			console.log("7");
			console.log(access_token);
		}
	);
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


function getResult () {
	            function cb(data) {        
                    console.log("cb: " + JSON.stringify(data));
            }
            
                var auth = {
                    //
                    // Update with your auth tokens.
                    //
                    consumerKey : "msiwtsUTuGQOvXSRTkbO7g",
                    consumerSecret : "wBbvE-5SnXxv2VpByelMxNuwSeA",
                    accessToken : "EDLGL4ThVxyrRmjK-pCF0nXIyJbykQPG",
                    // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
                    // You wouldn't actually want to expose your access token secret like this in a real application.
                    accessTokenSecret : "sJYJ1q-vjDyve2cW8oN_ZSiMV2M",
                    serviceProvider : {
                        signatureMethod : "HMAC-SHA1"
                    }
                };
        
                var terms = 'food';
                var near = 'San+Francisco';
        
                var accessor = {
                    consumerSecret : auth.consumerSecret,
                    tokenSecret : auth.accessTokenSecret
                };

                var parameters = [];
                parameters.push(['term', terms]);
                parameters.push(['location', near]);
                parameters.push(['callback', 'cb']);
                parameters.push(['oauth_consumer_key', auth.consumerKey]);
                parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
                parameters.push(['oauth_token', auth.accessToken]);
                parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
        
                var message = {
                    'action' : 'https://api.yelp.com/v2/search',
                    'method' : 'GET',
                    'parameters' : parameters
                };
        
                OAuth.setTimestampAndNonce(message);
                OAuth.SignatureMethod.sign(message, accessor);
        
                var parameterMap = OAuth.getParameterMap(message.parameters);
                    
                $.ajax({
                    'url' : message.action,
                    'data' : parameterMap,
                    'dataType' : 'jsonp',
                    'jsonpCallback' : 'cb',
                    'cache': true,
                })
                .done(function(data, textStatus, jqXHR) {
                        console.log('success[' + data + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
                    }
                )
                .fail(function(jqXHR, textStatus, errorThrown) {
                                    console.log('error[' + errorThrown + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
                        }
                );


}