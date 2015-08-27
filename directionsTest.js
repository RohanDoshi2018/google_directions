// function GoogleDirections (input) {}

// accessing google directions api
// docs: https://developers.google.com/maps/documentation/directions/intro

var googleDirections_baseUrl = "http://maps.googleapis.com/maps/api/directions/json?";
var googleDirections_KEY = "AIzaSyDJfoK_YPddLRIL98w3NtqT9oQADUzWABc";


var parameters = {
	origin: "Princeton",
	destination: "New York City"
	// customize "language" based on from parameter in google translate(starting language)
	// customize "units" based on country code of incoming phone number
	// customize "region" after looking at country code of incoming phone number
	// customize "mode" after training wit
	// customize "avoid" after training wit
	// customize "transit_mode" after training wit
	// customize "departure_time" and "arrival time" if "transit_mode" or "mode" is public transportation
};

// check for required parameters..........................

// construct api query url
var ansArray = [];
ansArray.push(googleDirections_baseUrl);
var counter = 0;
for(var i in parameters) {
	if (counter === 0)
		ansArray.push(i+"="+parameters[i]);
	else
		ansArray.push("&"+i+"="+parameters[i]);
	counter++;
}
ansArray.push("&API_KEY="+googleDirections_KEY);
var ansURL = ansArray.join("");
console.log("QUERYING GOOGLE DIRECTIONS: " + ansURL);

// make request to google server for response
var request = require('request');
request(ansURL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
  	res = JSON.parse(body);
  
    // parse api response  and output answer
    for(var step in res.routes[0].legs[0].steps) {
    	var stepObj = res.routes[0].legs[0].steps[step];
    	var instruction = stepObj.html_instructions;
    	instruction = instruction.replace(/<[^>]*>/g, ""); //regex to remove html tags
    	var distance = stepObj.distance.text;
    	var duration = stepObj.duration.text;
		console.log("Step " + step + ": " + instruction + "("+ distance +"/"+ duration+")");
    }

    //convert answer back to original language...

  }
});

