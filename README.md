This is a simple weather app built on Node.js.

It connects with [openweathermap.org](https://openweathermap.org/). To use it you will need to create an account and get an API key.

### Instructions:

Get your own API key from [openweathermap.org](https://openweathermap.org/) and copy and paste it into the "api-key.json" file in the appropriate place.

To run the application, you will need to run "app.js" and supply two arguments to the command line. The first is the city and the second is the country code, leaving one space in between.

For example, if you want to see what the current temperature is in Calgary, Canada, you would type the following:

```
~$ node app.js Calgary CA
```

The units are set to metric, but can be changed by setting the ```units``` variable in "app.js" to either "imperial" or "kelvin".
