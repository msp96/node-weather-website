const request = require('request')
const geocode = (address,callback) => {

    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibWVldDEyMyIsImEiOiJja2drYnR3ZWwwMHNrMzBvNndmb2FiNWl2In0.os6_DatbQuWnudBeLnsx-Q'
    request({ url:geocodeURL ,json:true },(error,{body})=>
    {
        if(error){

            callback('Unable to connect the  location service!',undefined)
        
        }else if(body.features.length===0){

            callback('Unable to find location,try another search',undefined)

        }else{

            callback(undefined,{

                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location : body.features[0].place_name

            })

        }
    })
}
module.exports = geocode