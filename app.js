const weather = require('./weather');

const units = 'metric';

const location = process.argv.slice(2).join(",");
weather.get(location, units);
