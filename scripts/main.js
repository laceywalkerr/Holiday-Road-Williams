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
getAttractionData().then(
    ()=> {
        attractionList(attractionCollection)
    }
)

