/**
 * This NPM Module serves as a Node Wrapper for asynchronously 
 * querying the Google Directions API.
 */

var request = require('request');
var qs = require('query-string');

// validation of input
function validateInput(params, cb) {
	if (typeof params !== 'object')
		throw new TypeError("params must be an object");
	if (typeof cb !== 'function')
		throw new TypeError("callback must be a function");
	if (params.origin === "")
		throw new Error("params.origin is required");
	if (params.destination === "")
		throw new Error("params.destination is required");
	if (params.key === "")
		throw new Error("params.key is required");
}

 module.exports = {
 	getDirections: function(params, cb) {
 		// validate inputs to npm module
 		validateInput(params, cb);

 		// build query URL
		var url = "https://maps.googleapis.com/maps/api/directions/json?" + qs.stringify(params);

		// make request to google server
		request(url, function(err, res, body) {
			return cb(err, JSON.parse(body));
		});

 	},
 	getDirectionSteps: function(params, cb) {
 		// validate inputs to npm module
 		validateInput(params, cb);

 		// build query URL
		var url = "https://maps.googleapis.com/maps/api/directions/json?" + qs.stringify(params);
		// make request to google server
		request(url, function(err, res, body) {
			return cb(err, JSON.parse(body).routes[0].legs[0].steps);
		});

 	},
 	getDistance: function(params, cb) {
 		// validate inputs to npm module
 		validateInput(params, cb);

 		// build query URL
		var url = "https://maps.googleapis.com/maps/api/directions/json?" + qs.stringify(params);

		// make request to google server
		request(url, function(err, res, body) {
			return cb(err, JSON.parse(body).routes[0].legs[0].distance.text);
		});

 	},
 	getDuration: function(params, cb) {
 		// validate inputs to npm module
 		validateInput(params, cb);

 		// build query URL
		var url = "https://maps.googleapis.com/maps/api/directions/json?" + qs.stringify(params);

		// make request to google server
		request(url, function(err, res, body) {
			return cb(err, JSON.parse(body).routes[0].legs[0].duration.text);
		});

 	},
 	getOriginAddress: function(params, cb) {
 		// validate inputs to npm module
 		validateInput(params, cb);

 		// build query URL
		var url = "https://maps.googleapis.com/maps/api/directions/json?" + qs.stringify(params);

		// make request to google server
		request(url, function(err, res, body) {
			return cb(err, JSON.parse(body).routes[0].legs[0].start_address);
		});

 	},
 	getDestinationAddress: function(params, cb) {
 		// validate inputs to npm module
 		validateInput(params, cb);

 		// build query URL
		var url = "https://maps.googleapis.com/maps/api/directions/json?" + qs.stringify(params);

		// make request to google server
		request(url, function(err, res, body) {
			return cb(err, JSON.parse(body).routes[0].legs[0].end_address);
		});

 	}
 };
 // re-tag to higher version, and redeploy

// https://quickleft.com/blog/creating-and-publishing-a-node-js-module/

// validation --> parameters good, google server working, request working, there is a valid response
// fix folder structure