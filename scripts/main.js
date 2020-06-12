getEateriesData().then(
    () => {
        eateriesList(eateriesCollection)
    }
)
getNationalParksData().then(
    (response) => {
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
