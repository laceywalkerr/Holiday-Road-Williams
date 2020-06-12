const weatherConverter = (weatherObject) => {
    console.log(weatherObject)
    const weatherHTMLRepresentation = 
        `
        <section> 
            <h3>Nashville Weather</h3>
            <h4>Today</h4>
            <div>Weather: ${weatherObject.weather[0].description}</div>
            <div>Current Temp: ${weatherObject.main.temp}&deg;</div>
            <div>Feels Like: ${weatherObject.main.feels_like}&deg;</div>
            <div>High / Low Temp: ${weatherObject.main.temp_max}&deg;</div>
            <div>Lowest Temp: ${weatherObject.main.temp_min}&deg;</div>
            <div>Humidity: ${weatherObject.main.humidity}</div>
            <br>
        </section>`

    return weatherHTMLRepresentation
}