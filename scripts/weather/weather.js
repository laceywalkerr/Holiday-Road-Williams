const weatherConverter = (weatherObject) => {
    console.log(weatherObject)
    const weatherHTMLRepresentation = 
        `
        <section> 
            
            <div>Date & Time:<br> ${weatherObject.dt_txt}</div>
            <div>Weather: ${weatherObject.weather[0].description}</div>
            <div>Current Temp: ${weatherObject.main.temp}&deg;</div>
            <div>Feels Like: ${weatherObject.main.feels_like}&deg;</div>
            <div>Highest Temp: ${weatherObject.main.temp_max}&deg;</div>
            <div>Lowest Temp: ${weatherObject.main.temp_min}&deg;</div>
            <div>Humidity: ${weatherObject.main.humidity}&#37;</div>
            

            <br> 
        </section>`

    return weatherHTMLRepresentation
}