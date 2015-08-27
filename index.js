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
		request(url, function (error, response, body) {
		  // not being returned... fix this
		  if (!error && response.statusCode == 200) {
		  	return JSON.parse(body);
		  }
		});
 	}
 };


// test code

// var map = require('google_directions').getDirections;
// ans = map("Princeton", "New York City", "AIzaSyDJfoK_YPddLRIL98w3NtqT9oQADUzWABc");
// console.log(ans);

// restructure this npm module, add functionality, re-tag to higher version, and redeploy

// https://quickleft.com/blog/creating-and-publishing-a-node-js-module/