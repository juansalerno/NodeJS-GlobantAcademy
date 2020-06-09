const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')


const address = process.argv[2]

if (!address) {
    console.log('Please insert an address');
} else {
    geocode(address, (error, {location, longitude, latitude} = {}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}


