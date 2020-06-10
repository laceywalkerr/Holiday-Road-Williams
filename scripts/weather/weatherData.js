let weatherCollection = []

const getWeatherData = () => {
    return fetch(`pro.openweathermap.org/data/2.5/forecast/hourly?q={Nashville}&appid={0a2e6c6371949d84048b4e18daa54cc8}`).then(
        (response) => {
            return response.json()
        }
    )
       
}