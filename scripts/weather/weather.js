const weatherConverter = (weatherObject) => {
    console.log(weatherObject)
    const weatherHTMLRepresentation = 
        `
        <section> 
            <h3>Nashville Weather</h3>
            <div>Weather: ${weatherObject.weather[0].description}</div>
            <div>Highest Temp: ${weatherObject.main.temp_max}&deg;</div>
            <div>Lowest Temp: ${weatherObject.main.temp_min}&deg;</div>
            <div>Humidity: ${weatherObject.main.humidity}</div>

        </section>`

    return weatherHTMLRepresentation
}