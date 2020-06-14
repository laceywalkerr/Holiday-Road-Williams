let weatherCollection = []

//getWeatherData invoked on parksList.js in the nationalParksDropdownBox Event Listener using the zipcode paramater.
const getWeatherData = (zipcode) => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&units=Imperial&cnt=3&APPID=${API.weatherKey}`).then(
        (response) => {
            return response.json()
        }
    )
}