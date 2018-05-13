/**
* This NPM Module serves as a Node Wrapper for asynchronously 
* querying the Google Directions API.
*/

var request = require('request');
var qs = require('query-string');

// validation of input
function validateInput(params, cb) {
	if (typeof params !== 'object')
		return new TypeError("params must be an object");
	if (typeof cb !== 'function')
		return new TypeError("callback must be a function");
	if (params.origin === "")
		return new Error("params.origin is required");
	if (params.destination === "")
		return new Error("params.destination is required");
	if (params.key === "")
		return new Error("params.key is required");
}

module.exports = {
	getDirections: function(params, cb) {
		// validate inputs to npm module
		var validateErr = validateInput(params, cb);
		if (validateErr) {
			return cb(validateErr);
		}

		// build query URL
		var url = "https://maps.googleapis.com/maps/api/directions/json?" + qs.stringify(params);

		// make request to google server
		request(url, function(err, res, body) {
			return cb(err, JSON.parse(body));
		});

	},
	getDirectionSteps: function(params, cb) {
		// validate inputs to npm module
		var validateErr = validateInput(params, cb);
		if (validateErr) {
			return cb(validateErr);
		}

		// build query URL
		var url = "https://maps.googleapis.com/maps/api/directions/json?" + qs.stringify(params);
		// make request to google server
		request(url, function(err, res, body) {
			return cb(err, JSON.parse(body).routes[0].legs[0].steps);
		});

	},
	getDistance: function(params, cb) {
		// validate inputs to npm module
		var validateErr = validateInput(params, cb);
		if (validateErr) {
			return cb(validateErr);
		}

		// build query URL
		var url = "https://maps.googleapis.com/maps/api/directions/json?" + qs.stringify(params);

		// make request to google server
		request(url, function(err, res, body) {
			return cb(err, JSON.parse(body).routes[0].legs[0].distance.text);
		});

	},
	getDistanceInMeters: function(params, cb) {
		// validate inputs to npm module
		var validateErr = validateInput(params, cb);
		if (validateErr) {
			return cb(validateErr);
		}

		// build query URL
		var url = "https://maps.googleapis.com/maps/api/directions/json?" + qs.stringify(params);

		// make request to google server
		request(url, function(err, res, body) {
			return cb(err, JSON.parse(body).routes[0].legs[0].distance.value);
		});

	},
	getDuration: function(params, cb) {
		// validate inputs to npm module
		var validateErr = validateInput(params, cb);
		if (validateErr) {
			return cb(validateErr);
		}

		// build query URL
		var url = "https://maps.googleapis.com/maps/api/directions/json?" + qs.stringify(params);

		// make request to google server
		request(url, function(err, res, body) {
			return cb(err, JSON.parse(body).routes[0].legs[0].duration.text);
		});

	},
	getOriginAddress: function(params, cb) {
		// validate inputs to npm module
		var validateErr = validateInput(params, cb);
		if (validateErr) {
			return cb(validateErr);
		}
		
		// build query URL
		var url = "https://maps.googleapis.com/maps/api/directions/json?" + qs.stringify(params);

		// make request to google server
		request(url, function(err, res, body) {
			return cb(err, JSON.parse(body).routes[0].legs[0].start_address);
		});

	},
	getDestinationAddress: function(params, cb) {
		// validate inputs to npm module
		var validateErr = validateInput(params, cb);
		if (validateErr) {
			return cb(validateErr);
		}

		// build query URL
		var url = "https://maps.googleapis.com/maps/api/directions/json?" + qs.stringify(params);

		// make request to google server
		request(url, function(err, res, body) {
			return cb(err, JSON.parse(body).routes[0].legs[0].end_address);
		});

	}
};

