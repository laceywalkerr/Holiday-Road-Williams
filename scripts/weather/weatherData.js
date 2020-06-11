let weatherCollection = []

const getWeatherData = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?&limit=4&api_key=${API.weatherKey}`).then(
        (response) => {
            return response.json()
        }
    )
       
}