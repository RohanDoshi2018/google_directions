google_directions
=========

This is the simplest way to get directions from the Google Directions API. At minimum, an origin, destination, and API key is required. Find more information about the API here:
https://developers.google.com/maps/documentation/directions/intro

## Installation
1. Install in correct local directory:
```javascript
npm install —-save google_directions
```
2. Get a KEY from Google. You need to create or select a project in the  Google Developers Console and enable the API. Get started at this link:
https://console.developers.google.com/flows/enableapi?apiid=directions_backend&keyType=SERVER_SIDE
3. Then, go to the “Credentials” section and generate an access API key.

## Usage
1. Add the following code and fill in the template for the JSON object. At minimum, you must include an origin, destination, and API key. All other parameters are optional:
```javascript
google_directions = require(‘google_directions’);
```
2. Run:
```javascript
node index
```

## History
Still currently maintained and updated.
* 0.1.0 Initial Release

## Credits
Google
## License
MIT License
