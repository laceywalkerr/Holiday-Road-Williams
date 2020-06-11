let weatherCollection = []

const getWeatherData = () => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=37174&APPID=${API.weatherKey}`).then(
        (response) => {
            return response.json()
        }
    )
       
}