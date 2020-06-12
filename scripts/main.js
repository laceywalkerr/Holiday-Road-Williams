getEateriesData().then(
    () => {
        eateriesList(eateriesCollection)
    }
)
getNationalParksData().then(
    (nationalParkResponse) => {
        nationalParksList(nationalParkResponse.data)
        
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
