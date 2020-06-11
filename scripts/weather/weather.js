const weatherConverter = (weatherObject) => {
    console.log(weatherObject)
    const weatherHTMLRepresentation = 
        `
        <section> 
            <h2></h2>
            <div>Date: ${weatherObject.main.dt_text}</div>
            <div>City: ${weatherObject.main.name}</div>
            <div>Highest Temp: ${weatherObject.main.temp_max}&deg;</div>
            <div>Lowest Temp: ${weatherObject.main.temp_min}&deg;</div>
            <div>Humidity: ${weatherObject.main.humidity}</div>
        </section>`

    return weatherHTMLRepresentation
}