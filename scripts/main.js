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

getWeatherData().then(
    (response) => {
        console.log(response)
        weatherList(response)
    }
)

getAttractionData().then(
    ()=> {
        attractionList(attractionCollection)
    }
)
