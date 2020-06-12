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

// getWeatherData().then(
//     (response) => {
//         console.log(response.data)
//         weatherList(response.data)
//     }
// )

getAttractionData().then(
    ()=> {
        attractionList(attractionCollection)
    }
)
