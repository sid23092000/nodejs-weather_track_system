const request = require('request')



const forecast = (latitude, longitute, callback) => {
    const url = 'https://api.darksky.net/forecast/5575c8ba7426b8ee259fbefac0417b8a/' + latitude + ',' + longitute + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weathe =r services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. The high today is ' + body.daily.data[0].temperatureHigh + ' degrees with a low of '+ body.daily.data[0].temperatureLow + ' degrees. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}
module.exports = forecast