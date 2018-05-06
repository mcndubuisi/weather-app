//Dependencies required for the app
var request = require('request'); // Makes the API Call
var argv = require('yargs').argv; // Allows user to define variables from the command line

var apiKey = 'd1820b32713d44c0bd65efa727acad6a';
var city = argv.c || 'Lagos'; // Default City = Lagos
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


request(url, function(err, response, body){
    if(err){
        console.log('Error:' + error);
    }else{
        // Cleans up response
        var weather = JSON.parse(body);
        var message = `It is ${weather.main.temp}°C in ${weather.name}`;
        console.log(message);
    }
});