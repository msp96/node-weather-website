const request = require('request')
const forecast = (latitude,longitude,callback) => {

    const url ='http://api.weatherstack.com/current?access_key=608db63edc908304e861ec116733d016&query='+latitude+','+longitude+'&units=f'

    request({ url , json:true },( error,{ body }) =>
    {
        if(error){
    
            callback("unable to connect to weather service",undefined)
        
        } else if(body.error){
    
            callback("Unable to find location",undefined)
    
        } else {
            
             callback(undefined,body.current.weather_descriptions[0]+ '...' 
             + ' It is '+ body.current.temperature +' degrees out. It feels like '+body.current.feelslike + 
             ' degrees out. The visibility is '+body.current.visibility+'. The air pressure is '+body.current.pressure+
             '. Humidity is '+body.current.humidity + '%.')
        }
   
    
        
    })  
}
module.exports = forecast