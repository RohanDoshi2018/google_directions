/**
 * Query the Google Directions API (Node Wrapper)
 *
 * @param origin
 * @param destination
 * @param key
 */
 var request = require('request');

 module.exports = {
 	getDirections: function(origin, destination, key) {
 		// make API query url
 		var url = "http://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + destination + "&API_KEY=" + key;
 		// make request to Google API
		request(ansURL, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		  	return JSON.parse(body);
		  }
		});
 	}
 };