Author: Rohan Doshi

This is the simplest way to get directions from the Google Maps API. At minimum, an origin, destination, and API key is required.

Find more information about the targeted Google API here:
https://developers.google.com/maps/documentation/directions/intro

Instructions:

1) Install Node
2) Install this module: 
npm install —-save google_directions
3) Include the following code in your server-side javascript file:
google_directions = require(‘google_directions’);
4) You need to create or select a project in the  Google Developers Console and enable the API. Get started at this link:
https://console.developers.google.com/flows/enableapi?apiid=directions_backend&keyType=SERVER_SIDE
5) Go to the Credentials section and generate an access KEY.
6) Finally, add the following code. At minimum, you must include an origin, destination, and API key. All other parameters are optional:


Other Notes
1) There is a daily limit of 2,500 queries for free for the Google Directions API.