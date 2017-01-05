console.log(20);

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -35, lng: 150},
          zoom: 15
        });
      }

$(function() {
    console.log("1");
    watchSubmit()   
});

var latN;
var lngN;

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
                var near = 95124;
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
        console.log(data);
        for (var i = 0; i < businessNum; i++) {
            var biz = data.businesses[i];
            row += '<h4>' + biz.name + '</h4>';
            row += '<p>Yelp Rating: ' + biz.rating + '</p>';
            row += '<p>Phone number: ' + biz.display_phone + '</p>';
            row += '<p>Address: </p>';
            row += '<p>' + biz.location.display_address + '</p>';

            //initMap(biz);
           
            //row += '<div id="map"></div>';
            //row += '<script async defer rc="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAtjZoeYGWfzt4nJ2VM8Hs7NZzhN0wVgI&callback=initMap"></script>';
            latN = biz.location.coordinate.latitude;
            lngN = biz.location.coordinate.longitude;
            //row += '<a href="map.html">google map</a>';
            //row += '<div id="map"></div>';
            //row += '<script>';
            //row += 'var map;';
            //row += 'function initMap() {';
            //row += 'map = new google.maps.Map(document.getElementById("map"), {';
            //row += 'center: {lat: -34.397, lng: 150.644},';
            //row += 'zoom: 8';
            //row += '});} </script>';
            //row += '<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAtjZoeYGWfzt4nJ2VM8Hs7NZzhN0wVgI&callback=initMap" async defer></script>';


        }
        $('.js-search-results').html(row);  
}
