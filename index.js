//Require all the key dependencies that you will need for the app

const express = require("express");
const app = express();

//Define Africa's Talking stuff
const options = {
    apiKey: '00f3f280667ec45e69aac9555056ce2b21510d99eea7cc384737c7bdfdae149e',         // use your sandbox app API key for development in the test environment
    username: 'sandbox',      // use 'sandbox' for development in the test environment
};
const AfricasTalking = require('africastalking')(options);

//Create the main express route that will be used
app.post("/", (req,res) => {

	//Define the service needed (SMS)
	const sms = AfricasTalking.SMS;
	// all methods return a promise
	const opts = {
		to: '+254727545805',
		from: '12324',
		message: 'my reply',
	}; //Configure options for message sending

	sms.send(opts)
	    .then(function(success) {
			console.log(success);
		})
		.catch(function(error) {
			console.log(error);
		}); //Actually send the message

});

//Start the server and have it listening on desired port

app.listen(3000, function() {
	console.log("Started");
});