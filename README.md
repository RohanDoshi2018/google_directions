google_directions
=========

This is the simplest interface for getting Google directions. 

This NPM Module serves as a Node Wrapper for asynchronously querying the Google Directions API (https://developers.google.com/maps/documentation/directions/intro). Find more information about the API here: https://developers.google.com/maps/documentation/directions/intro

## Installation
```javascript
npm install —-save google_directions
```
**Get a Google API Key**
https://console.developers.google.com/flows/enableapi?apiid=directions_backend&keyType=SERVER_SIDE

* Select/create a project
* Enable Directions API
* Generate Key (See Credentials Tab)

## Usage
```javascript
var map = require('google_directions');

var params = {
	// REQUIRED
	origin: "",
	destination: "",
	key: "",

	// OPTIONAL
	mode: "",
	avoid: "",
	language: "",
	units: "",
	region: "",
};
```
**API**

```javascript
// get the raw Google Directions API response as JSON object
map.getDirections(params, function (err, data) {
	if (err) {
		console.log(err);
		return 1;
	}
	console.log(data);
});

// get navigation steps in JSON object
map.getDirectionSteps(params, function (err, steps){
	if (err) {
		console.log(err);
		return 1;
	}

	// parse the JSON object of steps into a string output
	var output="";
	var stepCounter = 1;
	steps.forEach(function(stepObj) {
		var instruction = stepObj.html_instructions;
		instruction = instruction.replace(/<[^>]*>/g, ""); //regex to remove html tags
		var distance = stepObj.distance.text;
		var duration = stepObj.duration.text;
		output += "Step " + stepCounter + ": " + instruction + " ("+ distance +"/"+ duration+")\n";
		stepCounter++;
	});	
	console.log(output);
});

// get total distance as string
map.getDistance(params, function (err, data) {
	if (err) {
		console.log(err);
		return 1;
	}
	console.log(data);
});

// get total duration as string
map.getDuration(params, function (err, data) {
	if (err) {
		console.log(err);
		return 1;
	}
	console.log(data);
});

// get the starting address as string
map.getOriginAddress(params, function (err, data) {
	if (err) {
		console.log(err);
		return 1;
	}
	console.log(data);
});

// get the destination address as string
map.getDestinationAddress(params, function (err, data) {
	if (err) {
		console.log(err);
		return 1;
	}
	console.log(data);
});
```

##Parameter Details
* origin: staring location
* destination: ending location
* key: your Google-generated API key
* mode: “driving” | “walking” | “bicycling”
  * default: driving
* avoid: "tolls" | "highways" | "ferries" | "indoor"
  * default: none
* language: https://developers.google.com/maps/faq#languagesupport
  * default: based on origin country
* units: "metric" | "imperial"
  * default: based on origin country
* region: https://developers.google.com/maps/documentation/directions/intro#RegionBiasing
  * default: based on location of user

## History
Still currently maintained and updated.
* 0.2.0 Initial Release

## Credits
Google

## License
MIT License
