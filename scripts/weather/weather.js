const weatherConverter = (weatherObject) => {
    console.log(weatherObject)
    const weatherHTMLRepresentation = 
        `
        <section> 
            
            <div><b>Date & Time:</b><br> ${weatherObject.dt_txt}</div> <br>
            <div><b>Weather:</b> ${weatherObject.weather[0].description}</div>
            <div><b>Current Temp:</b> ${weatherObject.main.temp}&deg;</div>
            <div><b>Feels Like:</b> ${weatherObject.main.feels_like}&deg;</div>
            <div><b>Highest Temp:</b> ${weatherObject.main.temp_max}&deg;</div>
            <div><b>Lowest Temp:</b> ${weatherObject.main.temp_min}&deg;</div>
            <div><b>Humidity:</b> ${weatherObject.main.humidity}&#37;</div>
            <br> 
        </section>`

    return weatherHTMLRepresentation
}