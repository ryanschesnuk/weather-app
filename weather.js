const http = require('http');
const api = require('./api.json');

function printMessage(location, temp) {
  location = location.split(",").join(", ");
  const message = `Current temperature in ${location} is ${temp}C`;
  console.log(message);
}

function getWeather(location, units) {
  try {
    const request = http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=${api.key}`, response => {
      if (response.statusCode === 200) {
        let body = "";

        response.on('data', data => {
          body += data.toString();
        });

        response.on('end', () => {
          try {
            const weather = JSON.parse(body);
            printMessage(location, weather.main.temp);
          } catch (error) {
            console.error(error.message);
          }
        });
      } else {
        const message = "There was an error";
        const statusCodeError = new Error(message);
        console.error(statusCodeError);
      }
    });
  } catch (error) {
    console.error(error.message);
  }

  }


module.exports.get = getWeather;
