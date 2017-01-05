$(function() {
	console.log("1");
	watchSubmit()	
});


function watchSubmit() {
	console.log("2");
	$('.js-search-form').submit(function(){
		console.log("3");
		event.preventDefault();
		var userInputSearchLocation = $(this).find('.js-userInputSearchLocation').val();
		console.log(13, userInputSearchLocation);
		getResult(userInputSearchLocation);
	});
}


function getResult (userInputSearchLocation) {
	            function cb(data) {        
                    console.log("cb: " + JSON.stringify(data));
            }
                var auth = {
                    consumerKey : "msiwtsUTuGQOvXSRTkbO7g",
                    consumerSecret : "wBbvE-5SnXxv2VpByelMxNuwSeA",
                    accessToken : "EDLGL4ThVxyrRmjK-pCF0nXIyJbykQPG",
                    accessTokenSecret : "sJYJ1q-vjDyve2cW8oN_ZSiMV2M",
                    serviceProvider : {
                        signatureMethod : "HMAC-SHA1"
                    }
                };
        
                var terms = 'ramen';
                var near = 'san jose';
                console.log(12, userInputSearchLocation);
        
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

                .done(function(data) {
                        renderBusinesses(data);
                    }
                )
                
}


function renderBusinesses(data) {
		var row = '';
		var businessNum = data.businesses.length;
		console.log(10);
		for (var i = 0; i < businessNum; i++) {
			var biz = data.businesses[i];
			console.log(11, biz.name);
			row += '<h4>' + biz.name + '</h4>';
			console.log(11);
		}
		$('.js-search-results').html(row);	
}

