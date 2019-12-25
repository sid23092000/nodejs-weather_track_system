const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2lkMjMwOSIsImEiOiJjazQyZm4wankwMDdnM210YjFmdTV0bWU3In0.pGe6czoYFjf18j0XL_dbhg'

    request({ url, json: true }, (error, {body}) => {
    try{
        if(error) {
            callback('Unable to connect to local services', undefined)
        } else if(body.features.length === 0) {
            
            callback('Unable to find location. Try another search.', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
        
    }
    catch(error){
        console.log(error.message)
        callback(error.message, undefined);
    }    
        
    })
}

module.exports = geocode