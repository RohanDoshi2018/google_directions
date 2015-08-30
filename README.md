google_directions
=========

This NPM Module is the simplest interface for asynchronously querying the Google Directions API (https://developers.google.com/maps/documentation/directions/intro) via Node. Find more information about the API here: https://developers.google.com/maps/documentation/directions/intro.

## Installation
```javascript
npm install —-save google_directions
```
**Get a Google API Key**

https://console.developers.google.com/flows/enableapi?apiid=directions_backend&keyType=SERVER_SIDE

* Select/Create a Project
* Enable Directions API
* Generate a Key (See the Credentials Tab)

## Usage
Include this. [Here are the parameter details](#parameters).
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
#### API Methods

There are six main methods to choose from.

1) Raw Google Direction API Response <JSON>
```javascript
// get the raw Google Directions API response as JSON object
map.getDirections(params, function (err, data) {
	if (err) {
		console.log(err);
		return 1;
	}
	console.log(data);
});
```
2) Navigation Steps <JSON>
```javascript
// get navigation steps as JSON object
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
		instruction = instruction.replace(/<[^>]*>/g, ""); // regex to remove html tags
		var distance = stepObj.distance.text;
		var duration = stepObj.duration.text;
		output += "Step " + stepCounter + ": " + instruction + " ("+ distance +"/"+ duration+")\n";
		stepCounter++;
	});	
	console.log(output);
});
```

3) Total Distance <String>
```javascript
// get total distance as string
map.getDistance(params, function (err, data) {
	if (err) {
		console.log(err);
		return 1;
	}
	console.log(data);
});
```

4) Total Duration <String>
```javascript
// get total duration as string
map.getDuration(params, function (err, data) {
	if (err) {
		console.log(err);
		return 1;
	}
	console.log(data);
});
```

5) Starting Address <String>
```javascript
// get the starting address as string
map.getOriginAddress(params, function (err, data) {
	if (err) {
		console.log(err);
		return 1;
	}
	console.log(data);
});
```

6) Destination Address <String>
```javascript
// get the destination address as string
map.getDestinationAddress(params, function (err, data) {
	if (err) {
		console.log(err);
		return 1;
	}
	console.log(data);
});
```

##<a name=“parameters”></a>Parameters
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
