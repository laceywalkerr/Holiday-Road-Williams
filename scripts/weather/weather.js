const weatherConverter = (weatherObject) => {
    console.log(weatherObject)
    const weatherHTMLRepresentation = 
        `
        <h1>hi</h1>
        <section> 
            <div>Date: ${weatherObject.main.dt_text}</div>
            <div>City: ${weatherObject.main.name}</div>
            <div>Highest Temp: ${weatherObject.main.temp_max}</div>
            <div>Lowest Temp: ${weatherObject.main.temp_min}</div>
            <div>Humidity: ${weatherObject.main.humidity}</div>
        </section>`

    return weatherHTMLRepresentation
}