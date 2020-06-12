let weatherCollection = []

const getWeatherData = () => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=37211&units=Imperial&cnt=1&APPID=${API.weatherKey}`).then(
        (response) => {
            return response.json()
        }
    )
       
}