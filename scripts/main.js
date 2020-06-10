getEateriesData().then(
    () => {
        eateriesList(eateriesCollection)
    }
)
getNationalParksData().then(
    (response) => {
        console.log(response.data)
        nationalParksList(response.data)
    }
)
console.log(API)

getWeatherData().then(
    () => {
        console.log(response.data)
        weatherList(response.data)
    }
)