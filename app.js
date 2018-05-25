//Dependencies required for the app
const request = require('request'); // Makes the API Call
const argv = require('yargs').argv; // Allows user to define variables from the command line

const apiKey = '*******************';
const city = argv.c || 'Lagos'; // Default City = Lagos
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


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
